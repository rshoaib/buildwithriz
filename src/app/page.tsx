'use client';

import { useState, useEffect, useCallback, Suspense, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import InvoiceForm from '@/components/InvoiceForm';
import InvoicePreview from '@/components/InvoicePreview';
import ThemeSelector from '@/components/ThemeSelector';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorks from '@/components/sections/HowItWorks';
import WhyInvoicing from '@/components/sections/WhyInvoicing';
import TrustSignals from '@/components/sections/TrustSignals';
import FeaturesSection from '@/components/sections/FeaturesSection';
import FAQSection from '@/components/sections/FAQSection';
import DisclaimerSection from '@/components/sections/DisclaimerSection';
import dynamic from 'next/dynamic';
import { defaultInvoice } from '@/data/defaults';
import { getIndustry } from '@/data/industries';
import { InvoiceData, SavedTemplate, TemplateStyle } from '@/types/invoice';
import {
  CheckCircle,
  Save,
  FolderOpen,
  Trash2,
  RotateCcw,
  FileText,
  Eye,
} from 'lucide-react';

const TEMPLATES_KEY = 'buildwithriz-templates';
const THEME_KEY = 'buildwithriz-theme';
const DRAFT_KEY = 'buildwithriz-draft';
const LAST_INV_NUM_KEY = 'buildwithriz-last-inv-num';

const PdfGenerator = dynamic(() => import('@/components/PdfGenerator'), {
  ssr: false,
  loading: () => (
    <button className="w-full py-3 bg-gray-200 rounded-xl text-gray-500 font-medium cursor-wait">
      Loading PDF engine...
    </button>
  ),
});

function HomeContent() {
  const [invoice, setInvoice] = useState<InvoiceData>(defaultInvoice);
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  const [templates, setTemplates] = useState<SavedTemplate[]>([]);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [templateName, setTemplateName] = useState('');
  const [showTemplates, setShowTemplates] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<TemplateStyle>('modern');
  const [templateBanner, setTemplateBanner] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const autoSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstLoad = useRef(true);
  const templateDropdownRef = useRef<HTMLDivElement>(null);

  // Load templates, theme, and draft from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(TEMPLATES_KEY);
      if (stored) {
        setTemplates(JSON.parse(stored));
      }
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme) {
        setSelectedTheme(savedTheme as TemplateStyle);
      }
      // Restore auto-saved draft (only if no URL template)
      const templateSlug = new URLSearchParams(window.location.search).get('template');
      if (!templateSlug) {
        const draft = localStorage.getItem(DRAFT_KEY);
        if (draft) {
          setInvoice(JSON.parse(draft));
        }
      }
      // Auto-increment invoice number
      const lastNum = localStorage.getItem(LAST_INV_NUM_KEY);
      if (lastNum && !templateSlug) {
        const match = lastNum.match(/(\d+)$/);
        if (match) {
          const nextNum = String(Number(match[1]) + 1).padStart(match[1].length, '0');
          const prefix = lastNum.slice(0, lastNum.length - match[1].length);
          setInvoice(prev => ({ ...prev, invoiceNumber: `${prefix}${nextNum}` }));
        }
      }
    } catch {
      // Ignore errors from localStorage
    }
    isFirstLoad.current = false;
  }, []);

  // Auto-save draft every 5 seconds
  useEffect(() => {
    if (isFirstLoad.current) return;
    if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    autoSaveTimerRef.current = setTimeout(() => {
      try {
        localStorage.setItem(DRAFT_KEY, JSON.stringify(invoice));
      } catch { /* full */ }
    }, 5000);
    return () => {
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    };
  }, [invoice]);

  // Due date auto-calculation from payment terms
  useEffect(() => {
    const terms = invoice.paymentTerms.trim().toLowerCase();
    let days: number | null = null;
    if (terms === 'due on receipt' || terms === 'due upon receipt') {
      days = 0;
    } else {
      const match = terms.match(/^net\s*(\d+)$/i);
      if (match) {
        days = parseInt(match[1], 10);
      }
    }
    if (days !== null && invoice.invoiceDate) {
      const baseDate = new Date(invoice.invoiceDate + 'T00:00:00');
      if (!isNaN(baseDate.getTime())) {
        const dueDate = new Date(baseDate.getTime() + days * 24 * 60 * 60 * 1000);
        const dueDateStr = dueDate.toISOString().split('T')[0];
        if (dueDateStr !== invoice.dueDate) {
          setInvoice(prev => ({ ...prev, dueDate: dueDateStr }));
        }
      }
    }
  }, [invoice.paymentTerms, invoice.invoiceDate]);

  // Load industry template from URL params
  useEffect(() => {
    const templateSlug = searchParams.get('template');
    if (templateSlug) {
      const ind = getIndustry(templateSlug);
      if (ind && ind.sampleInvoice) {
        const now = new Date();
        const due = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        setInvoice({
          ...defaultInvoice,
          ...ind.sampleInvoice,
          invoiceNumber: `INV-${String(Date.now()).slice(-6)}`,
          invoiceDate: now.toISOString().split('T')[0],
          dueDate: due.toISOString().split('T')[0],
        } as InvoiceData);
        setTemplateBanner(`Loaded ${ind.name} template — customize and download!`);
        setTimeout(() => setTemplateBanner(null), 5000);
      }
    }
  }, [searchParams]);

  // Close template dropdown on outside click
  useEffect(() => {
    if (!showTemplates) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (templateDropdownRef.current && !templateDropdownRef.current.contains(e.target as Node)) {
        setShowTemplates(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showTemplates]);

  const handleThemeChange = useCallback((theme: TemplateStyle) => {
    setSelectedTheme(theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // localStorage full or unavailable
    }
  }, []);

  const saveTemplates = useCallback((newTemplates: SavedTemplate[]) => {
    setTemplates(newTemplates);
    try {
      localStorage.setItem(TEMPLATES_KEY, JSON.stringify(newTemplates));
    } catch {
      // localStorage full or unavailable
    }
  }, []);

  const handleSaveTemplate = () => {
    if (!templateName.trim()) return;
    const newTemplate: SavedTemplate = {
      id: String(Date.now()),
      name: templateName.trim(),
      data: { ...invoice },
      createdAt: new Date().toISOString(),
    };
    saveTemplates([newTemplate, ...templates]);
    setTemplateName('');
    setShowSaveDialog(false);
  };

  const handleLoadTemplate = (template: SavedTemplate) => {
    setInvoice({ ...template.data });
    setShowTemplates(false);
  };

  const handleDeleteTemplate = (id: string) => {
    saveTemplates(templates.filter((t) => t.id !== id));
  };

  const handleResetInvoice = () => {
    if (!confirm('Reset all fields? This will clear your current invoice.')) return;
    // Save the current invoice number for auto-increment
    try {
      localStorage.setItem(LAST_INV_NUM_KEY, invoice.invoiceNumber);
      localStorage.removeItem(DRAFT_KEY);
    } catch { /* ignore */ }
    const match = invoice.invoiceNumber.match(/(\d+)$/);
    let nextNumber = `INV-${String(Date.now()).slice(-6)}`;
    if (match) {
      const nextNum = String(Number(match[1]) + 1).padStart(match[1].length, '0');
      const prefix = invoice.invoiceNumber.slice(0, invoice.invoiceNumber.length - match[1].length);
      nextNumber = `${prefix}${nextNum}`;
    }
    setInvoice({ ...defaultInvoice, invoiceNumber: nextNumber });
  };

  return (
    <main className="min-h-screen">
      {/* Template loaded banner */}
      {templateBanner && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-5 py-2.5 rounded-xl shadow-lg text-sm font-medium flex items-center gap-2 animate-bounce">
          <CheckCircle size={16} />
          {templateBanner}
        </div>
      )}
      <HeroSection />

      <HowItWorks />

      {/* Invoice Builder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Templates Toolbar */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {/* Save */}
          {showSaveDialog ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 px-3 py-1.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:text-gray-100"
                placeholder="Template name..."
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSaveTemplate()}
                autoFocus
              />
              <button
                onClick={handleSaveTemplate}
                disabled={!templateName.trim()}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition disabled:opacity-50"
              >
                <Save size={12} />
                Save
              </button>
              <button
                onClick={() => { setShowSaveDialog(false); setTemplateName(''); }}
                className="text-xs text-gray-500 hover:text-gray-700 transition"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowSaveDialog(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <Save size={12} />
              Save as Template
            </button>
          )}

          {/* Load */}
          <div className="relative" ref={templateDropdownRef}>
            <button
              onClick={() => setShowTemplates(!showTemplates)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <FolderOpen size={12} />
              Load Template
              {templates.length > 0 && (
                <span className="bg-blue-100 text-blue-700 text-[10px] font-semibold px-1.5 py-0.5 rounded-full ml-1">
                  {templates.length}
                </span>
              )}
            </button>
            {showTemplates && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl z-50 overflow-hidden">
                {templates.length === 0 ? (
                  <p className="px-4 py-3 text-xs text-gray-400 text-center">No saved templates yet</p>
                ) : (
                  <div className="max-h-48 overflow-y-auto divide-y divide-gray-50">
                    {templates.map((t) => (
                      <div
                        key={t.id}
                        className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition group"
                      >
                        <button
                          onClick={() => handleLoadTemplate(t)}
                          className="flex-1 text-left"
                        >
                          <p className="text-xs font-medium text-gray-800 dark:text-gray-200">{t.name}</p>
                          <p className="text-[10px] text-gray-400">
                            {new Date(t.createdAt).toLocaleDateString()}
                          </p>
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleDeleteTemplate(t.id); }}
                          className="p-1 text-gray-300 hover:text-red-500 transition opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Reset */}
          <button
            onClick={handleResetInvoice}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-red-600 hover:border-red-200 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
          >
            <RotateCcw size={12} />
            Reset
          </button>
        </div>
        {/* Mobile tabs */}
        <div className="flex lg:hidden mb-4 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
          <button
            onClick={() => setActiveTab('form')}
            aria-label="Switch to edit form"
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium transition ${
              activeTab === 'form'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <FileText size={14} />
            Edit
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            aria-label="Switch to invoice preview"
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium transition ${
              activeTab === 'preview'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <Eye size={14} />
            Preview
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          <div className={`${activeTab === 'preview' ? 'hidden lg:block' : ''}`}>
            <InvoiceForm data={invoice} onChange={setInvoice} />
          </div>

          {/* Preview + Download */}
          <div className={`space-y-4 ${activeTab === 'form' ? 'hidden lg:block' : ''}`}>
            <div className="sticky top-20">
              <ThemeSelector selected={selectedTheme} onChange={handleThemeChange} />
              <InvoicePreview data={invoice} theme={selectedTheme} />
              <div className="mt-4">
                <PdfGenerator data={invoice} theme={selectedTheme} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyInvoicing />

      <TrustSignals />

      <FeaturesSection />

      <FAQSection />

      <DisclaimerSection />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}
