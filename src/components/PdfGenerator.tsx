'use client';

import { InvoiceData } from '@/types/invoice';
import { getCurrencySymbol } from '@/data/currencies';
import { calculateSubtotal, calculateTax, calculateDiscount, calculateTotal } from '@/data/defaults';
import { getLabels } from '@/data/languages';
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

const styles = PDFStyleSheet.create({
  page: { padding: 40, fontSize: 10, fontFamily: 'Helvetica', color: '#1a1a1a' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  headerRight: { textAlign: 'right' },
  logo: { width: 50, height: 50, objectFit: 'contain' as const },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2563eb' },
  companyName: { fontSize: 14, fontWeight: 'bold', marginBottom: 2 },
  smallText: { fontSize: 8, color: '#6b7280' },
  section: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  sectionCol: { width: '30%' },
  sectionLabel: { fontSize: 8, fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: 1, marginBottom: 4 },
  sectionValue: { fontSize: 9, color: '#1a1a1a' },
  table: { marginBottom: 20 },
  tableHeader: { flexDirection: 'row', backgroundColor: '#f3f4f6', padding: 8, borderRadius: 4 },
  tableHeaderCell: { fontSize: 8, fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase' as const },
  tableRow: { flexDirection: 'row', padding: 8, borderBottomWidth: 0.5, borderBottomColor: '#e5e7eb' },
  tableCell: { fontSize: 9, color: '#374151' },
  descCol: { width: '45%' },
  qtyCol: { width: '15%', textAlign: 'center' as const },
  rateCol: { width: '20%', textAlign: 'right' as const },
  amountCol: { width: '20%', textAlign: 'right' as const },
  totalsContainer: { alignItems: 'flex-end' as const, marginBottom: 20 },
  totalsRow: { flexDirection: 'row' as const, justifyContent: 'space-between' as const, width: 200, paddingVertical: 3 },
  totalsLabel: { fontSize: 9, color: '#6b7280' },
  totalsValue: { fontSize: 9, color: '#374151' },
  totalRow: { flexDirection: 'row' as const, justifyContent: 'space-between' as const, width: 200, paddingVertical: 6, borderTopWidth: 1, borderTopColor: '#d1d5db', marginTop: 2 },
  totalLabel: { fontSize: 11, fontWeight: 'bold', color: '#1a1a1a' },
  totalValue: { fontSize: 11, fontWeight: 'bold', color: '#2563eb' },
  notes: { marginTop: 10, paddingTop: 10, borderTopWidth: 0.5, borderTopColor: '#e5e7eb' },
  notesLabel: { fontSize: 8, fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase' as const, letterSpacing: 1, marginBottom: 4 },
  notesText: { fontSize: 9, color: '#6b7280' },
  footer: { position: 'absolute' as const, bottom: 30, left: 40, right: 40, textAlign: 'center' as const },
  footerText: { fontSize: 7, color: '#9ca3af' },
});

function InvoicePDF({ data }: { data: InvoiceData }) {
  const symbol = getCurrencySymbol(data.currency);
  const subtotal = calculateSubtotal(data.items);
  const tax = calculateTax(subtotal, data.taxRate);
  const discount = calculateDiscount(subtotal, data.discountRate);
  const total = calculateTotal(data.items, data.taxRate, data.discountRate);
  const labels = getLabels(data.language);

  return (
    <PDFDoc>
      <PDFPage size="A4" style={styles.page}>
        {/* Header */}
        <PDFView style={styles.header}>
          <PDFView style={styles.headerLeft}>
            {data.logo ? (
              <PDFImage src={data.logo} style={styles.logo} />
            ) : null}
            <PDFView>
              <PDFText style={styles.companyName}>{data.fromName || 'Your Company'}</PDFText>
              {data.fromEmail ? <PDFText style={styles.smallText}>{data.fromEmail}</PDFText> : null}
              {data.fromPhone ? <PDFText style={styles.smallText}>{data.fromPhone}</PDFText> : null}
              {data.fromAddress ? <PDFText style={styles.smallText}>{data.fromAddress}</PDFText> : null}
            </PDFView>
          </PDFView>
          <PDFView style={styles.headerRight}>
            <PDFText style={styles.title}>{labels.invoice}</PDFText>
            <PDFText style={styles.smallText}>#{data.invoiceNumber}</PDFText>
          </PDFView>
        </PDFView>

        {/* Details */}
        <PDFView style={styles.section}>
          <PDFView style={styles.sectionCol}>
            <PDFText style={styles.sectionLabel}>{labels.billTo}</PDFText>
            <PDFText style={styles.sectionValue}>{data.toName || '—'}</PDFText>
            {data.toEmail ? <PDFText style={styles.smallText}>{data.toEmail}</PDFText> : null}
            {data.toAddress ? <PDFText style={styles.smallText}>{data.toAddress}</PDFText> : null}
          </PDFView>
          <PDFView style={styles.sectionCol}>
            <PDFText style={styles.sectionLabel}>{labels.date}</PDFText>
            <PDFText style={styles.sectionValue}>{data.invoiceDate}</PDFText>
            <PDFText style={{ ...styles.sectionLabel, marginTop: 8 }}>{labels.dueDate}</PDFText>
            <PDFText style={styles.sectionValue}>{data.dueDate}</PDFText>
          </PDFView>
          <PDFView style={styles.sectionCol}>
            <PDFText style={styles.sectionLabel}>{labels.paymentTerms}</PDFText>
            <PDFText style={styles.sectionValue}>{data.paymentTerms || 'Net 30'}</PDFText>
            <PDFText style={{ ...styles.sectionLabel, marginTop: 8 }}>{labels.currency}</PDFText>
            <PDFText style={styles.sectionValue}>{data.currency}</PDFText>
          </PDFView>
        </PDFView>

        {/* Items Table */}
        <PDFView style={styles.table}>
          <PDFView style={styles.tableHeader}>
            <PDFText style={{ ...styles.tableHeaderCell, ...styles.descCol }}>{labels.description}</PDFText>
            <PDFText style={{ ...styles.tableHeaderCell, ...styles.qtyCol }}>{labels.qty}</PDFText>
            <PDFText style={{ ...styles.tableHeaderCell, ...styles.rateCol }}>{labels.rate}</PDFText>
            <PDFText style={{ ...styles.tableHeaderCell, ...styles.amountCol }}>{labels.amount}</PDFText>
          </PDFView>
          {data.items.map((item) => (
            <PDFView key={item.id} style={styles.tableRow}>
              <PDFText style={{ ...styles.tableCell, ...styles.descCol }}>{item.description || '—'}</PDFText>
              <PDFText style={{ ...styles.tableCell, ...styles.qtyCol }}>{String(item.quantity)}</PDFText>
              <PDFText style={{ ...styles.tableCell, ...styles.rateCol }}>{symbol}{item.rate.toFixed(2)}</PDFText>
              <PDFText style={{ ...styles.tableCell, ...styles.amountCol }}>{symbol}{(item.quantity * item.rate).toFixed(2)}</PDFText>
            </PDFView>
          ))}
        </PDFView>

        {/* Totals */}
        <PDFView style={styles.totalsContainer}>
          <PDFView style={styles.totalsRow}>
            <PDFText style={styles.totalsLabel}>{labels.subtotal}</PDFText>
            <PDFText style={styles.totalsValue}>{symbol}{subtotal.toFixed(2)}</PDFText>
          </PDFView>
          {data.taxRate > 0 && (
            <PDFView style={styles.totalsRow}>
              <PDFText style={styles.totalsLabel}>{labels.tax} ({data.taxRate}%)</PDFText>
              <PDFText style={styles.totalsValue}>+{symbol}{tax.toFixed(2)}</PDFText>
            </PDFView>
          )}
          {data.discountRate > 0 && (
            <PDFView style={styles.totalsRow}>
              <PDFText style={styles.totalsLabel}>{labels.discount} ({data.discountRate}%)</PDFText>
              <PDFText style={{ ...styles.totalsValue, color: '#16a34a' }}>-{symbol}{discount.toFixed(2)}</PDFText>
            </PDFView>
          )}
          <PDFView style={styles.totalRow}>
            <PDFText style={styles.totalLabel}>{labels.total}</PDFText>
            <PDFText style={styles.totalValue}>{symbol}{total.toFixed(2)}</PDFText>
          </PDFView>
        </PDFView>

        {/* Notes */}
        {data.notes ? (
          <PDFView style={styles.notes}>
            <PDFText style={styles.notesLabel}>{labels.notes}</PDFText>
            <PDFText style={styles.notesText}>{data.notes}</PDFText>
          </PDFView>
        ) : null}

        {/* Footer */}
        <PDFView style={styles.footer}>
          <PDFText style={styles.footerText}>Generated for free at buildwithriz.com</PDFText>
        </PDFView>
      </PDFPage>
    </PDFDoc>
  );
}

interface PdfGeneratorProps {
  data: InvoiceData;
}

export default function PdfGenerator({ data }: PdfGeneratorProps) {
  return (
    <PDFDownloadLink
      document={<InvoicePDF data={data} />}
      fileName={`${data.invoiceNumber || 'invoice'}.pdf`}
    >
      {({ loading }) => (
        <button
          className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white transition-all ${
            loading
              ? 'bg-gray-400 cursor-wait'
              : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
          }`}
        >
          <Download size={18} />
          {loading ? 'Generating PDF...' : 'Download Invoice PDF'}
        </button>
      )}
    </PDFDownloadLink>
  );
}
