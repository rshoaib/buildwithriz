import { TemplateStyle } from '@/types/invoice';

export interface InvoiceTheme {
    id: TemplateStyle;
    name: string;
    description: string;
    swatch: string; // Tailwind bg class for the selector swatch
    // Preview colors (Tailwind classes)
    preview: {
        headerBg: string;
        headerText: string;
        headerSubtext: string;
        logoBg: string;
        accentText: string;
        tableHeaderBg: string;
        tableAltBg: string;
        totalBorder: string;
        totalValueColor: string;
        // For minimal theme: no header bar
        noHeaderBar?: boolean;
    };
    // PDF colors (hex values for react-pdf)
    pdf: {
        primary: string;
        primaryLight: string;
        headerBg: string;
        headerText: string;
        accentText: string;
        tableHeaderBg: string;
        tableBorder: string;
        totalValueColor: string;
        // For minimal theme: no header bar
        noHeaderBar?: boolean;
    };
}

export const themes: InvoiceTheme[] = [
    {
        id: 'modern',
        name: 'Modern',
        description: 'Clean blue gradient',
        swatch: 'bg-gradient-to-r from-blue-600 to-blue-700',
        preview: {
            headerBg: 'bg-gradient-to-r from-blue-600 to-blue-700',
            headerText: 'text-white',
            headerSubtext: 'text-blue-100',
            logoBg: 'bg-white',
            accentText: 'text-blue-600',
            tableHeaderBg: 'bg-gray-50',
            tableAltBg: 'bg-gray-50/50',
            totalBorder: 'border-gray-200',
            totalValueColor: 'text-gray-900',
        },
        pdf: {
            primary: '#2563eb',
            primaryLight: '#dbeafe',
            headerBg: '#2563eb',
            headerText: '#ffffff',
            accentText: '#2563eb',
            tableHeaderBg: '#f3f4f6',
            tableBorder: '#e5e7eb',
            totalValueColor: '#2563eb',
        },
    },
    {
        id: 'classic',
        name: 'Classic',
        description: 'Professional dark',
        swatch: 'bg-gradient-to-r from-gray-800 to-gray-900',
        preview: {
            headerBg: 'bg-gradient-to-r from-gray-800 to-gray-900',
            headerText: 'text-white',
            headerSubtext: 'text-gray-300',
            logoBg: 'bg-white',
            accentText: 'text-gray-800',
            tableHeaderBg: 'bg-gray-100',
            tableAltBg: 'bg-gray-50/50',
            totalBorder: 'border-gray-300',
            totalValueColor: 'text-gray-900',
        },
        pdf: {
            primary: '#1f2937',
            primaryLight: '#f3f4f6',
            headerBg: '#1f2937',
            headerText: '#ffffff',
            accentText: '#1f2937',
            tableHeaderBg: '#f3f4f6',
            tableBorder: '#d1d5db',
            totalValueColor: '#1f2937',
        },
    },
    {
        id: 'minimal',
        name: 'Minimal',
        description: 'Clean & borderless',
        swatch: 'bg-gradient-to-r from-gray-200 to-gray-300',
        preview: {
            headerBg: 'bg-white',
            headerText: 'text-gray-900',
            headerSubtext: 'text-gray-500',
            logoBg: 'bg-gray-100',
            accentText: 'text-gray-700',
            tableHeaderBg: 'bg-transparent',
            tableAltBg: 'bg-transparent',
            totalBorder: 'border-gray-200',
            totalValueColor: 'text-gray-900',
            noHeaderBar: true,
        },
        pdf: {
            primary: '#374151',
            primaryLight: '#f9fafb',
            headerBg: '#ffffff',
            headerText: '#111827',
            accentText: '#374151',
            tableHeaderBg: '#f9fafb',
            tableBorder: '#e5e7eb',
            totalValueColor: '#111827',
            noHeaderBar: true,
        },
    },
    {
        id: 'bold',
        name: 'Bold',
        description: 'Vibrant purple',
        swatch: 'bg-gradient-to-r from-purple-600 to-indigo-700',
        preview: {
            headerBg: 'bg-gradient-to-r from-purple-600 to-indigo-700',
            headerText: 'text-white',
            headerSubtext: 'text-purple-200',
            logoBg: 'bg-white',
            accentText: 'text-purple-600',
            tableHeaderBg: 'bg-purple-50',
            tableAltBg: 'bg-purple-50/30',
            totalBorder: 'border-purple-200',
            totalValueColor: 'text-purple-700',
        },
        pdf: {
            primary: '#9333ea',
            primaryLight: '#f3e8ff',
            headerBg: '#7c3aed',
            headerText: '#ffffff',
            accentText: '#7c3aed',
            tableHeaderBg: '#f5f3ff',
            tableBorder: '#e9d5ff',
            totalValueColor: '#7c3aed',
        },
    },
    {
        id: 'forest',
        name: 'Forest',
        description: 'Natural green',
        swatch: 'bg-gradient-to-r from-emerald-600 to-teal-700',
        preview: {
            headerBg: 'bg-gradient-to-r from-emerald-600 to-teal-700',
            headerText: 'text-white',
            headerSubtext: 'text-emerald-100',
            logoBg: 'bg-white',
            accentText: 'text-emerald-600',
            tableHeaderBg: 'bg-emerald-50',
            tableAltBg: 'bg-emerald-50/30',
            totalBorder: 'border-emerald-200',
            totalValueColor: 'text-emerald-700',
        },
        pdf: {
            primary: '#059669',
            primaryLight: '#ecfdf5',
            headerBg: '#059669',
            headerText: '#ffffff',
            accentText: '#059669',
            tableHeaderBg: '#ecfdf5',
            tableBorder: '#a7f3d0',
            totalValueColor: '#059669',
        },
    },
];

export function getTheme(id: TemplateStyle): InvoiceTheme {
    return themes.find((t) => t.id === id) || themes[0];
}
