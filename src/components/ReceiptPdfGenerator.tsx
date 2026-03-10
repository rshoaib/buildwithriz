'use client';

import { InvoiceData, TemplateStyle } from '@/types/invoice';
import { getCurrencySymbol } from '@/data/currencies';
import { calculateSubtotal, calculateTax, calculateDiscount, calculateTotal } from '@/data/defaults';
import { getLabels } from '@/data/languages';
import { getTheme } from '@/data/themes';
import {
  Document as PDFDoc,
  Page as PDFPage,
  View as PDFView,
  Text as PDFText,
  Image as PDFImage,
  StyleSheet as PDFStyleSheet,
  PDFDownloadLink,
} from '@react-pdf/renderer';
import { Download } from 'lucide-react';

const baseStyles = PDFStyleSheet.create({
  page: { padding: 40, fontSize: 10, fontFamily: 'Helvetica', color: '#1a1a1a' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  headerRight: { textAlign: 'right' },
  logo: { width: 50, height: 50, objectFit: 'contain' as const },
  companyName: { fontSize: 14, fontWeight: 'bold', marginBottom: 2 },
  smallText: { fontSize: 8, color: '#6b7280' },
  section: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  sectionCol: { width: '30%' },
  sectionLabel: { fontSize: 8, fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: 1, marginBottom: 4 },
  sectionValue: { fontSize: 9, color: '#1a1a1a' },
  table: { marginBottom: 20 },
  tableHeader: { flexDirection: 'row', padding: 8, borderRadius: 4 },
  tableHeaderCell: { fontSize: 8, fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase' as const },
  tableRow: { flexDirection: 'row', padding: 8 },
  tableCell: { fontSize: 9, color: '#374151' },
  descCol: { width: '45%' },
  qtyCol: { width: '15%', textAlign: 'center' as const },
  rateCol: { width: '20%', textAlign: 'right' as const },
  amountCol: { width: '20%', textAlign: 'right' as const },
  totalsContainer: { alignItems: 'flex-end' as const, marginBottom: 20 },
  totalsRow: { flexDirection: 'row' as const, justifyContent: 'space-between' as const, width: 200, paddingVertical: 3 },
  totalsLabel: { fontSize: 9, color: '#6b7280' },
  totalsValue: { fontSize: 9, color: '#374151' },
  totalRow: { flexDirection: 'row' as const, justifyContent: 'space-between' as const, width: 200, paddingVertical: 6, borderTopWidth: 1, marginTop: 2 },
  totalLabel: { fontSize: 11, fontWeight: 'bold', color: '#1a1a1a' },
  notes: { marginTop: 10, paddingTop: 10, borderTopWidth: 0.5, borderTopColor: '#e5e7eb' },
  notesLabel: { fontSize: 8, fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: 1, marginBottom: 4 },
  notesText: { fontSize: 9, color: '#6b7280' },
  footer: { position: 'absolute' as const, bottom: 30, left: 40, right: 40, textAlign: 'center' as const },
  footerText: { fontSize: 7, color: '#9ca3af' },
  // Minimal header (no colored bar)
  minimalHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: '#e5e7eb' },
});

function InvoicePDF({ data, theme = 'modern' }: { data: InvoiceData; theme?: TemplateStyle }) {
  const symbol = getCurrencySymbol(data.currency);
  const subtotal = calculateSubtotal(data.items);
  const tax = calculateTax(subtotal, data.taxRate);
  const discount = calculateDiscount(subtotal, data.discountRate);
  const total = calculateTotal(data.items, data.taxRate, data.discountRate);
  const labels = getLabels(data.language);
  const t = getTheme(theme).pdf;

  return (
    <PDFDoc>
      <PDFPage size="A4" style={baseStyles.page}>
        {/* Header */}
        {t.noHeaderBar ? (
          /* Minimal: no background color, clean border-bottom */
          <PDFView style={baseStyles.minimalHeader}>
            <PDFView style={baseStyles.headerLeft}>
              {data.logo ? (
                <PDFImage src={data.logo} style={baseStyles.logo} />
              ) : null}
              <PDFView>
                <PDFText style={{ ...baseStyles.companyName, color: t.headerText }}>{data.fromName || 'Your Company'}</PDFText>
                {data.fromEmail ? <PDFText style={baseStyles.smallText}>{data.fromEmail}</PDFText> : null}
                {data.fromPhone ? <PDFText style={baseStyles.smallText}>{data.fromPhone}</PDFText> : null}
                {data.fromAddress ? <PDFText style={baseStyles.smallText}>{data.fromAddress}</PDFText> : null}
              </PDFView>
            </PDFView>
            <PDFView style={baseStyles.headerRight}>
              <PDFText style={{ fontSize: 24, fontWeight: 'bold', color: t.accentText }}>RECEIPT</PDFText>
              <PDFText style={baseStyles.smallText}>#{data.invoiceNumber}</PDFText>
            </PDFView>
          </PDFView>
        ) : (
          /* Colored header bar */
          <PDFView style={{ ...baseStyles.header, backgroundColor: t.headerBg, margin: -40, marginBottom: 30, paddingHorizontal: 40, paddingVertical: 20 }}>
            <PDFView style={baseStyles.headerLeft}>
              {data.logo ? (
                <PDFImage src={data.logo} style={{ ...baseStyles.logo, backgroundColor: '#ffffff', borderRadius: 6, padding: 4 }} />
              ) : null}
              <PDFView>
                <PDFText style={{ ...baseStyles.companyName, color: t.headerText }}>{data.fromName || 'Your Company'}</PDFText>
                {data.fromEmail ? <PDFText style={{ ...baseStyles.smallText, color: t.headerText, opacity: 0.8 }}>{data.fromEmail}</PDFText> : null}
                {data.fromPhone ? <PDFText style={{ ...baseStyles.smallText, color: t.headerText, opacity: 0.8 }}>{data.fromPhone}</PDFText> : null}
                {data.fromAddress ? <PDFText style={{ ...baseStyles.smallText, color: t.headerText, opacity: 0.8 }}>{data.fromAddress}</PDFText> : null}
              </PDFView>
            </PDFView>
            <PDFView style={baseStyles.headerRight}>
              <PDFText style={{ fontSize: 24, fontWeight: 'bold', color: t.headerText }}>RECEIPT</PDFText>
              <PDFText style={{ ...baseStyles.smallText, color: t.headerText, opacity: 0.8 }}>#{data.invoiceNumber}</PDFText>
            </PDFView>
          </PDFView>
        )}

        {/* Details */}
        <PDFView style={baseStyles.section}>
          <PDFView style={baseStyles.sectionCol}>
            <PDFText style={baseStyles.sectionLabel}>{labels.billTo}</PDFText>
            <PDFText style={baseStyles.sectionValue}>{data.toName || '—'}</PDFText>
            {data.toEmail ? <PDFText style={baseStyles.smallText}>{data.toEmail}</PDFText> : null}
            {data.toAddress ? <PDFText style={baseStyles.smallText}>{data.toAddress}</PDFText> : null}
          </PDFView>
          <PDFView style={baseStyles.sectionCol}>
            <PDFText style={baseStyles.sectionLabel}>{labels.date}</PDFText>
            <PDFText style={baseStyles.sectionValue}>{data.invoiceDate}</PDFText>
            <PDFText style={{ ...baseStyles.sectionLabel, marginTop: 8 }}>{labels.dueDate}</PDFText>
            <PDFText style={baseStyles.sectionValue}>{data.dueDate}</PDFText>
          </PDFView>
          <PDFView style={baseStyles.sectionCol}>
            <PDFText style={baseStyles.sectionLabel}>{labels.paymentTerms}</PDFText>
            <PDFText style={baseStyles.sectionValue}>{data.paymentTerms || 'Net 30'}</PDFText>
            <PDFText style={{ ...baseStyles.sectionLabel, marginTop: 8 }}>{labels.currency}</PDFText>
            <PDFText style={baseStyles.sectionValue}>{data.currency}</PDFText>
          </PDFView>
        </PDFView>

        {/* Items Table */}
        <PDFView style={baseStyles.table}>
          <PDFView style={{ ...baseStyles.tableHeader, backgroundColor: t.tableHeaderBg }}>
            <PDFText style={{ ...baseStyles.tableHeaderCell, ...baseStyles.descCol }}>{labels.description}</PDFText>
            <PDFText style={{ ...baseStyles.tableHeaderCell, ...baseStyles.qtyCol }}>{labels.qty}</PDFText>
            <PDFText style={{ ...baseStyles.tableHeaderCell, ...baseStyles.rateCol }}>{labels.rate}</PDFText>
            <PDFText style={{ ...baseStyles.tableHeaderCell, ...baseStyles.amountCol }}>{labels.amount}</PDFText>
          </PDFView>
          {data.items.map((item) => (
            <PDFView key={item.id} style={{ ...baseStyles.tableRow, borderBottomWidth: 0.5, borderBottomColor: t.tableBorder }}>
              <PDFText style={{ ...baseStyles.tableCell, ...baseStyles.descCol }}>{item.description || '—'}</PDFText>
              <PDFText style={{ ...baseStyles.tableCell, ...baseStyles.qtyCol }}>{String(item.quantity)}</PDFText>
              <PDFText style={{ ...baseStyles.tableCell, ...baseStyles.rateCol }}>{symbol}{item.rate.toFixed(2)}</PDFText>
              <PDFText style={{ ...baseStyles.tableCell, ...baseStyles.amountCol }}>{symbol}{(item.quantity * item.rate).toFixed(2)}</PDFText>
            </PDFView>
          ))}
        </PDFView>

        {/* Totals */}
        <PDFView style={baseStyles.totalsContainer}>
          <PDFView style={baseStyles.totalsRow}>
            <PDFText style={baseStyles.totalsLabel}>{labels.subtotal}</PDFText>
            <PDFText style={baseStyles.totalsValue}>{symbol}{subtotal.toFixed(2)}</PDFText>
          </PDFView>
          {data.taxRate > 0 && (
            <PDFView style={baseStyles.totalsRow}>
              <PDFText style={baseStyles.totalsLabel}>{labels.tax} ({data.taxRate}%)</PDFText>
              <PDFText style={baseStyles.totalsValue}>+{symbol}{tax.toFixed(2)}</PDFText>
            </PDFView>
          )}
          {data.discountRate > 0 && (
            <PDFView style={baseStyles.totalsRow}>
              <PDFText style={baseStyles.totalsLabel}>{labels.discount} ({data.discountRate}%)</PDFText>
              <PDFText style={{ ...baseStyles.totalsValue, color: '#16a34a' }}>-{symbol}{discount.toFixed(2)}</PDFText>
            </PDFView>
          )}
          <PDFView style={{ ...baseStyles.totalRow, borderTopColor: t.tableBorder }}>
            <PDFText style={baseStyles.totalLabel}>{labels.total}</PDFText>
            <PDFText style={{ ...baseStyles.totalLabel, color: t.totalValueColor }}>{symbol}{total.toFixed(2)}</PDFText>
          </PDFView>
        </PDFView>

        {/* Notes */}
        {data.notes ? (
          <PDFView style={baseStyles.notes}>
            <PDFText style={baseStyles.notesLabel}>{labels.notes}</PDFText>
            <PDFText style={baseStyles.notesText}>{data.notes}</PDFText>
          </PDFView>
        ) : null}

        {/* Footer */}
        <PDFView style={baseStyles.footer}>
          <PDFText style={baseStyles.footerText}>Generated for free at buildwithriz.com</PDFText>
        </PDFView>
      </PDFPage>
    </PDFDoc>
  );
}

interface PdfGeneratorProps {
  data: InvoiceData;
  theme?: TemplateStyle;
}

export default function PdfGenerator({ data, theme = 'modern' }: PdfGeneratorProps) {
  const t = getTheme(theme);
  // Map theme to button gradient colors
  const buttonGradients: Record<TemplateStyle, string> = {
    modern: 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-blue-500/25 hover:shadow-blue-500/40',
    classic: 'from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black shadow-gray-500/25 hover:shadow-gray-500/40',
    minimal: 'from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 shadow-gray-400/25 hover:shadow-gray-400/40',
    bold: 'from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 shadow-purple-500/25 hover:shadow-purple-500/40',
    forest: 'from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 shadow-emerald-500/25 hover:shadow-emerald-500/40',
  };

  return (
    <PDFDownloadLink
      document={<InvoicePDF data={data} theme={theme} />}
      fileName={`${data.invoiceNumber || 'receipt'}.pdf`}
    >
      {({ loading }) => (
        <button
          className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white transition-all ${
            loading
              ? 'bg-gray-400 cursor-wait'
              : `bg-gradient-to-r ${buttonGradients[t.id]} shadow-lg`
          }`}
        >
          <Download size={18} />
          {loading ? 'Generating PDF...' : 'Download Receipt PDF'}
        </button>
      )}
    </PDFDownloadLink>
  );
}
