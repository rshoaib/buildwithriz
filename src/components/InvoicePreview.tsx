'use client';

import { InvoiceData } from '@/types/invoice';
import { getCurrencySymbol, formatCurrency } from '@/data/currencies';
import { calculateSubtotal, calculateTax, calculateDiscount, calculateTotal } from '@/data/defaults';
import { getLabels } from '@/data/languages';

interface InvoicePreviewProps {
  data: InvoiceData;
}

export default function InvoicePreview({ data }: InvoicePreviewProps) {
  const symbol = getCurrencySymbol(data.currency);
  const subtotal = calculateSubtotal(data.items);
  const tax = calculateTax(subtotal, data.taxRate);
  const discount = calculateDiscount(subtotal, data.discountRate);
  const total = calculateTotal(data.items, data.taxRate, data.discountRate);
  const labels = getLabels(data.language);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            {data.logo && (
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.logo}
                  alt="Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
            <div>
              <h2 className="text-xl font-bold text-white">{data.fromName || 'Your Company'}</h2>
              {data.fromEmail && <p className="text-blue-100 text-xs mt-0.5">{data.fromEmail}</p>}
              {data.fromPhone && <p className="text-blue-100 text-xs">{data.fromPhone}</p>}
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-white tracking-wide">{labels.invoice}</p>
            <p className="text-blue-100 text-xs mt-0.5">#{data.invoiceNumber}</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-5">
        {/* From / To / Details row */}
        <div className="grid grid-cols-3 gap-4 text-xs">
          <div>
            <p className="font-semibold text-gray-500 uppercase tracking-wider mb-1">{labels.from}</p>
            <p className="font-medium text-gray-900">{data.fromName || '—'}</p>
            {data.fromAddress && (
              <p className="text-gray-500 whitespace-pre-line mt-0.5">{data.fromAddress}</p>
            )}
          </div>
          <div>
            <p className="font-semibold text-gray-500 uppercase tracking-wider mb-1">{labels.billTo}</p>
            <p className="font-medium text-gray-900">{data.toName || '—'}</p>
            {data.toEmail && <p className="text-gray-500 mt-0.5">{data.toEmail}</p>}
            {data.toAddress && (
              <p className="text-gray-500 whitespace-pre-line mt-0.5">{data.toAddress}</p>
            )}
          </div>
          <div className="text-right">
            <div className="space-y-1">
              <div>
                <p className="font-semibold text-gray-500 uppercase tracking-wider">{labels.date}</p>
                <p className="text-gray-900">{data.invoiceDate || '—'}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-500 uppercase tracking-wider">{labels.dueDate}</p>
                <p className="text-gray-900">{data.dueDate || '—'}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-500 uppercase tracking-wider">{labels.paymentTerms}</p>
                <p className="text-gray-900">{data.paymentTerms || '—'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="border border-gray-100 rounded-lg overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-gray-50 text-gray-500 uppercase tracking-wider">
                <th className="text-left py-2 px-3 font-semibold">{labels.description}</th>
                <th className="text-center py-2 px-3 font-semibold w-16">{labels.qty}</th>
                <th className="text-right py-2 px-3 font-semibold w-24">{labels.rate}</th>
                <th className="text-right py-2 px-3 font-semibold w-24">{labels.amount}</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item, i) => (
                <tr key={item.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                  <td className="py-2 px-3 text-gray-800">{item.description || '—'}</td>
                  <td className="py-2 px-3 text-center text-gray-600">{item.quantity}</td>
                  <td className="py-2 px-3 text-right text-gray-600">
                    {symbol}{item.rate.toFixed(2)}
                  </td>
                  <td className="py-2 px-3 text-right font-medium text-gray-900">
                    {symbol}{(item.quantity * item.rate).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end">
          <div className="w-56 space-y-1.5 text-xs">
            <div className="flex justify-between text-gray-600">
              <span>{labels.subtotal}</span>
              <span>{formatCurrency(subtotal, data.currency)}</span>
            </div>
            {data.taxRate > 0 && (
              <div className="flex justify-between text-gray-600">
                <span>{labels.tax} ({data.taxRate}%)</span>
                <span>+{formatCurrency(tax, data.currency)}</span>
              </div>
            )}
            {data.discountRate > 0 && (
              <div className="flex justify-between text-green-600">
                <span>{labels.discount} ({data.discountRate}%)</span>
                <span>-{formatCurrency(discount, data.currency)}</span>
              </div>
            )}
            <div className="border-t border-gray-200 pt-1.5 flex justify-between font-bold text-sm text-gray-900">
              <span>{labels.total}</span>
              <span>{formatCurrency(total, data.currency)}</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        {data.notes && (
          <div className="border-t border-gray-100 pt-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{labels.notes}</p>
            <p className="text-xs text-gray-600 whitespace-pre-line">{data.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}
