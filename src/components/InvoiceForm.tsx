'use client';

import { InvoiceData } from '@/types/invoice';
import { currencies } from '@/data/currencies';
import { languages } from '@/data/languages';
import { Plus, Trash2, Upload, X, Globe, Copy, GripVertical } from 'lucide-react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { useRef } from 'react';
import { calculateSubtotal, calculateTax, calculateDiscount, calculateTotal } from '@/data/defaults';
import ClientAddressBook from './ClientAddressBook';
import SignaturePad from './SignaturePad';

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

  const duplicateItem = (index: number) => {
    const items = [...data.items];
    const original = items[index];
    items.splice(index + 1, 0, { ...original, id: String(Date.now()) });
    update({ items });
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    
    if (startIndex === endIndex) return;

    const newItems = Array.from(data.items);
    const [removed] = newItems.splice(startIndex, 1);
    newItems.splice(endIndex, 0, removed);

    update({ items: newItems });
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
    'w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20';
  const labelClass = 'block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1';

  return (
    <div className="space-y-6">
      {/* Logo Upload */}
      <div className="rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 p-4 space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Logo</h3>
        {data.logo ? (
          <div className="flex items-center gap-3">
            <div className="relative w-20 h-12 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element -- Logo is a base64 data URL from FileReader, which next/image cannot handle */}
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
            className="flex items-center gap-2 px-3 py-2 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition w-full justify-center"
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
        <div className="rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 p-4 space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">From</h3>
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
        <div className="rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 p-4 space-y-3 relative">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Bill To</h3>
          </div>
          <ClientAddressBook 
            currentClient={{ name: data.toName, email: data.toEmail, address: data.toAddress }} 
            onSelectClient={(c) => update({ toName: c.name, toEmail: c.email, toAddress: c.address })} 
          />
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
      <div className="rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 p-4">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-3">Invoice Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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
                <Globe size={10} />
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
          <div>
            <label className={labelClass}>Status</label>
            <select
              className={inputClass}
              value={data.status || 'unpaid'}
              onChange={(e) => update({ status: e.target.value as 'unpaid' | 'paid' })}
            >
              <option value="unpaid">Unpaid</option>
              <option value="paid">Paid</option>
            </select>
          </div>
        </div>
      </div>

      {/* Line Items */}
      <div className="rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 p-4">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-3">Items</h3>
        
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="invoice-items">
            {(provided) => (
              <div 
                className="space-y-2"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {/* Header */}
                <div className="hidden md:flex items-center gap-2 text-xs font-medium text-gray-500 px-1 pl-8">
                  <div className="w-[42%]">Description</div>
                  <div className="w-[16%]">Qty</div>
                  <div className="w-[25%]">Rate</div>
                  <div className="flex-1 text-right pr-[4.5rem]">Amount</div>
                </div>

                {data.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="group bg-white dark:bg-gray-800 rounded-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition"
                      >
                        <div className="flex items-center gap-2">
                          <div 
                            {...provided.dragHandleProps}
                            className="hidden md:flex text-gray-300 hover:text-gray-500 cursor-grab active:cursor-grabbing p-1 -ml-1"
                          >
                            <GripVertical size={16} />
                          </div>
                          
                          <div className="flex-1 w-full">
                            {/* Desktop: grid row */}
                            <div className="hidden md:grid grid-cols-12 gap-2 items-center w-full">
                              <div className="col-span-5">
                                <input
                                  className={inputClass}
                                  placeholder="Item description"
                                  value={item.description}
                                  onChange={(e) => updateItem(index, 'description', e.target.value)}
                                />
                              </div>
                              <div className="col-span-2">
                                <input
                                  className={inputClass}
                                  type="number"
                                  min="1"
                                  placeholder="Qty"
                                  value={item.quantity || ''}
                                  onChange={(e) => updateItem(index, 'quantity', Number(e.target.value))}
                                />
                              </div>
                              <div className="col-span-3">
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
                              <div className="col-span-1 text-right text-sm font-medium text-gray-700 dark:text-gray-300">
                                {(item.quantity * item.rate).toFixed(2)}
                              </div>
                              <div className="col-span-1 flex justify-end gap-0.5">
                                <button
                                  onClick={() => duplicateItem(index)}
                                  className="p-1.5 text-gray-400 hover:text-blue-500 transition rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                  title="Duplicate item"
                                  aria-label={`Duplicate item ${index + 1}`}
                                >
                                  <Copy size={13} />
                                </button>
                                <button
                                  onClick={() => removeItem(index)}
                                  className="p-1.5 text-gray-400 hover:text-red-500 transition rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                                  disabled={data.items.length <= 1}
                                  aria-label={`Remove item ${index + 1}`}
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </div>

                            {/* Mobile: stacked card layout */}
                            <div className="md:hidden bg-white dark:bg-gray-800 rounded-lg p-2 border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 space-y-2 mt-2 -ml-2 -mr-2">
                              <div className="flex gap-2 items-start">
                                <div 
                                  {...provided.dragHandleProps}
                                  className="text-gray-300 hover:text-gray-500 cursor-grab active:cursor-grabbing p-2 mt-1"
                                >
                                  <GripVertical size={16} />
                                </div>
                                <div className="flex-1 space-y-2">
                                  <input
                                    className={inputClass}
                                    placeholder="Item description"
                                    value={item.description}
                                    onChange={(e) => updateItem(index, 'description', e.target.value)}
                                  />
                                  <div className="grid grid-cols-3 gap-2">
                                    <div>
                                      <label className="block text-[10px] text-gray-400 mb-0.5">Qty</label>
                                      <input
                                        className={inputClass}
                                        type="number"
                                        min="1"
                                        placeholder="1"
                                        value={item.quantity || ''}
                                        onChange={(e) => updateItem(index, 'quantity', Number(e.target.value))}
                                      />
                                    </div>
                                    <div>
                                      <label className="block text-[10px] text-gray-400 mb-0.5">Rate</label>
                                      <input
                                        className={inputClass}
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        placeholder="0.00"
                                        value={item.rate || ''}
                                        onChange={(e) => updateItem(index, 'rate', Number(e.target.value))}
                                      />
                                    </div>
                                    <div className="flex flex-col">
                                      <label className="block text-[10px] text-gray-400 mb-0.5">Amount</label>
                                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 py-2 text-center">
                                        {(item.quantity * item.rate).toFixed(2)}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex justify-end gap-1 border-t border-gray-100 dark:border-gray-700 pt-2">
                                    <button
                                      onClick={() => duplicateItem(index)}
                                      className="p-2 text-gray-400 hover:text-blue-500 transition rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                      title="Duplicate item"
                                      aria-label={`Duplicate item ${index + 1}`}
                                    >
                                      <Copy size={14} />
                                    </button>
                                    <button
                                      onClick={() => removeItem(index)}
                                      className="p-2 text-gray-400 hover:text-red-500 transition rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                                      disabled={data.items.length <= 1}
                                      aria-label={`Remove item ${index + 1}`}
                                    >
                                      <Trash2 size={14} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <button
          onClick={addItem}
          className="mt-3 flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition"
        >
          <Plus size={14} />
          Add Item
        </button>
      </div>

      {/* Extras & Bank Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 p-4 space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Extras</h3>
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
          <div>
            <label className={labelClass}>Payment Link (QR Code)</label>
            <input
              className={inputClass}
              placeholder="https://paypal.me/..."
              value={data.paymentLink || ''}
              onChange={(e) => update({ paymentLink: e.target.value })}
            />
          </div>
        </div>

        {/* Bank Details */}
        <div className="rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 p-4 space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Bank Details</h3>
          <div>
            <label className={labelClass}>Bank Name</label>
            <input
              className={inputClass}
              placeholder="e.g. Chase Bank"
              value={data.bankDetails?.bankName || ''}
              onChange={(e) => update({ bankDetails: { ...data.bankDetails!, bankName: e.target.value } })}
            />
          </div>
          <div>
            <label className={labelClass}>Account Name</label>
            <input
              className={inputClass}
              placeholder="e.g. John Doe / Acme Corp"
              value={data.bankDetails?.accountName || ''}
              onChange={(e) => update({ bankDetails: { ...data.bankDetails!, accountName: e.target.value } })}
            />
          </div>
          <div>
            <label className={labelClass}>Account / IBAN Number</label>
            <input
              className={inputClass}
              placeholder="e.g. 123456789"
              value={data.bankDetails?.accountNumber || ''}
              onChange={(e) => update({ bankDetails: { ...data.bankDetails!, accountNumber: e.target.value } })}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelClass}>Routing Number</label>
              <input
                className={inputClass}
                placeholder="Optional"
                value={data.bankDetails?.routingNumber || ''}
                onChange={(e) => update({ bankDetails: { ...data.bankDetails!, routingNumber: e.target.value } })}
              />
            </div>
            <div>
              <label className={labelClass}>SWIFT / BIC</label>
              <input
                className={inputClass}
                placeholder="Optional"
                value={data.bankDetails?.swiftBic || ''}
                onChange={(e) => update({ bankDetails: { ...data.bankDetails!, swiftBic: e.target.value } })}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Notes */}
        <div className="rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 p-4 space-y-3 h-full">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Notes</h3>
          <textarea
            className={`${inputClass} resize-none h-32`}
            placeholder="Thank you for your business!"
            value={data.notes}
            onChange={(e) => update({ notes: e.target.value })}
          />
        </div>

        {/* Signature */}
        <div className="h-full">
          <SignaturePad 
            initialSignature={data.signature}
            onSave={(sig) => update({ signature: sig })} 
            onClear={() => update({ signature: undefined })} 
          />
        </div>
      </div>

      {/* Running Total */}
      {(() => {
        const currencyObj = currencies.find(c => c.code === data.currency);
        const sym = currencyObj?.symbol || '$';
        const subtotal = calculateSubtotal(data.items);
        const tax = calculateTax(subtotal, data.taxRate);
        const discount = calculateDiscount(subtotal, data.discountRate);
        const total = calculateTotal(data.items, data.taxRate, data.discountRate);
        return (
          <div className="rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 p-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-3">Summary</h3>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal</span>
                <span>{sym}{subtotal.toFixed(2)}</span>
              </div>
              {data.taxRate > 0 && (
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Tax ({data.taxRate}%)</span>
                  <span>+{sym}{tax.toFixed(2)}</span>
                </div>
              )}
              {data.discountRate > 0 && (
                <div className="flex justify-between text-green-600 dark:text-green-400">
                  <span>Discount ({data.discountRate}%)</span>
                  <span>-{sym}{discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-gray-900 dark:text-white pt-1.5 border-t border-gray-200 dark:border-gray-600">
                <span>Total</span>
                <span>{sym}{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
