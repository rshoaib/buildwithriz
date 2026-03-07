'use client';

import { InvoiceData } from '@/types/invoice';
import { currencies } from '@/data/currencies';
import { languages } from '@/data/languages';
import { Plus, Trash2, Upload, X, Image as ImageIcon } from 'lucide-react';
import { useRef } from 'react';

interface InvoiceFormProps {
  data: InvoiceData;
  onChange: (data: InvoiceData) => void;
}

export default function InvoiceForm({ data, onChange }: InvoiceFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const update = (fields: Partial<InvoiceData>) => {
    onChange({ ...data, ...fields });
  };

  const updateItem = (index: number, field: string, value: string | number) => {
    const items = [...data.items];
    items[index] = { ...items[index], [field]: value };
    update({ items });
  };

  const addItem = () => {
    update({
      items: [
        ...data.items,
        { id: String(Date.now()), description: '', quantity: 1, rate: 0 },
      ],
    });
  };

  const removeItem = (index: number) => {
    if (data.items.length <= 1) return;
    update({ items: data.items.filter((_, i) => i !== index) });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (2MB max)
    if (file.size > 2 * 1024 * 1024) {
      alert('Logo must be smaller than 2MB');
      return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, or SVG)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      update({ logo: result });
    };
    reader.readAsDataURL(file);

    // Reset input so the same file can be re-uploaded
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeLogo = () => {
    update({ logo: '' });
  };

  const inputClass =
    'w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20';
  const labelClass = 'block text-xs font-medium text-gray-500 mb-1';

  return (
    <div className="space-y-6">
      {/* Logo Upload */}
      <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Logo</h3>
        {data.logo ? (
          <div className="flex items-center gap-3">
            <div className="relative w-20 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.logo}
                alt="Logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <button
              onClick={removeLogo}
              className="flex items-center gap-1 text-xs text-red-500 hover:text-red-600 transition"
            >
              <X size={12} />
              Remove
            </button>
          </div>
        ) : (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-3 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50 transition w-full justify-center"
          >
            <Upload size={14} />
            Upload Logo (PNG, JPG — max 2MB)
          </button>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/svg+xml,image/webp"
          className="hidden"
          onChange={handleLogoUpload}
        />
      </div>

      {/* From & To */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* From */}
        <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">From</h3>
          <div>
            <label className={labelClass}>Your Name / Company</label>
            <input
              className={inputClass}
              placeholder="Acme Corp"
              value={data.fromName}
              onChange={(e) => update({ fromName: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              className={inputClass}
              type="email"
              placeholder="you@company.com"
              value={data.fromEmail}
              onChange={(e) => update({ fromEmail: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Address</label>
            <textarea
              className={`${inputClass} resize-none`}
              rows={2}
              placeholder="123 Business St, City, Country"
              value={data.fromAddress}
              onChange={(e) => update({ fromAddress: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input
              className={inputClass}
              placeholder="+1 234 567 890"
              value={data.fromPhone}
              onChange={(e) => update({ fromPhone: e.target.value })}
            />
          </div>
        </div>

        {/* To */}
        <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Bill To</h3>
          <div>
            <label className={labelClass}>Client Name / Company</label>
            <input
              className={inputClass}
              placeholder="Client Inc"
              value={data.toName}
              onChange={(e) => update({ toName: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              className={inputClass}
              type="email"
              placeholder="client@company.com"
              value={data.toEmail}
              onChange={(e) => update({ toEmail: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Address</label>
            <textarea
              className={`${inputClass} resize-none`}
              rows={2}
              placeholder="456 Client Ave, City, Country"
              value={data.toAddress}
              onChange={(e) => update({ toAddress: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Invoice Details */}
      <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Invoice Details</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div>
            <label className={labelClass}>Invoice #</label>
            <input
              className={inputClass}
              value={data.invoiceNumber}
              onChange={(e) => update({ invoiceNumber: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Date</label>
            <input
              className={inputClass}
              type="date"
              value={data.invoiceDate}
              onChange={(e) => update({ invoiceDate: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Due Date</label>
            <input
              className={inputClass}
              type="date"
              value={data.dueDate}
              onChange={(e) => update({ dueDate: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Currency</label>
            <select
              className={inputClass}
              value={data.currency}
              onChange={(e) => update({ currency: e.target.value })}
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.symbol} {c.code} — {c.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>
              <span className="flex items-center gap-1">
                <ImageIcon size={10} />
                Invoice Language
              </span>
            </label>
            <select
              className={inputClass}
              value={data.language}
              onChange={(e) => update({ language: e.target.value })}
            >
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.nativeName} ({l.name})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Line Items */}
      <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Items</h3>
        <div className="space-y-2">
          {/* Header */}
          <div className="hidden md:grid grid-cols-12 gap-2 text-xs font-medium text-gray-500 px-1">
            <div className="col-span-5">Description</div>
            <div className="col-span-2">Qty</div>
            <div className="col-span-3">Rate</div>
            <div className="col-span-2 text-right">Amount</div>
          </div>

          {data.items.map((item, index) => (
            <div key={item.id} className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-12 md:col-span-5">
                <input
                  className={inputClass}
                  placeholder="Item description"
                  value={item.description}
                  onChange={(e) => updateItem(index, 'description', e.target.value)}
                />
              </div>
              <div className="col-span-4 md:col-span-2">
                <input
                  className={inputClass}
                  type="number"
                  min="1"
                  placeholder="Qty"
                  value={item.quantity || ''}
                  onChange={(e) => updateItem(index, 'quantity', Number(e.target.value))}
                />
              </div>
              <div className="col-span-5 md:col-span-3">
                <input
                  className={inputClass}
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Rate"
                  value={item.rate || ''}
                  onChange={(e) => updateItem(index, 'rate', Number(e.target.value))}
                />
              </div>
              <div className="col-span-2 md:col-span-1 text-right text-sm font-medium text-gray-700">
                {(item.quantity * item.rate).toFixed(2)}
              </div>
              <div className="col-span-1 flex justify-end">
                <button
                  onClick={() => removeItem(index)}
                  className="p-1.5 text-gray-400 hover:text-red-500 transition rounded-lg hover:bg-red-50"
                  disabled={data.items.length <= 1}
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={addItem}
          className="mt-3 flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition"
        >
          <Plus size={14} />
          Add Item
        </button>
      </div>

      {/* Tax, Discount, Notes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Extras</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>Tax Rate (%)</label>
              <input
                className={inputClass}
                type="number"
                min="0"
                max="100"
                step="0.5"
                value={data.taxRate || ''}
                onChange={(e) => update({ taxRate: Number(e.target.value) })}
              />
            </div>
            <div>
              <label className={labelClass}>Discount (%)</label>
              <input
                className={inputClass}
                type="number"
                min="0"
                max="100"
                step="0.5"
                value={data.discountRate || ''}
                onChange={(e) => update({ discountRate: Number(e.target.value) })}
              />
            </div>
          </div>
          <div>
            <label className={labelClass}>Payment Terms</label>
            <input
              className={inputClass}
              placeholder="Net 30"
              value={data.paymentTerms}
              onChange={(e) => update({ paymentTerms: e.target.value })}
            />
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Notes</h3>
          <textarea
            className={`${inputClass} resize-none`}
            rows={4}
            placeholder="Thank you for your business!"
            value={data.notes}
            onChange={(e) => update({ notes: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}
