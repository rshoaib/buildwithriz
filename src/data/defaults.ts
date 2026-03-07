import { InvoiceData } from '@/types/invoice';

export const defaultInvoice: InvoiceData = {
    logo: '',
    language: 'en',
    fromName: '',
    fromEmail: '',
    fromAddress: '',
    fromPhone: '',
    toName: '',
    toEmail: '',
    toAddress: '',
    invoiceNumber: `INV-${String(Date.now()).slice(-6)}`,
    invoiceDate: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    currency: 'USD',
    items: [
        { id: '1', description: '', quantity: 1, rate: 0 },
    ],
    taxRate: 0,
    discountRate: 0,
    notes: '',
    paymentTerms: 'Net 30',
};

export function calculateSubtotal(items: InvoiceData['items']): number {
    return items.reduce((sum, item) => sum + item.quantity * item.rate, 0);
}

export function calculateTax(subtotal: number, taxRate: number): number {
    return subtotal * (taxRate / 100);
}

export function calculateDiscount(subtotal: number, discountRate: number): number {
    return subtotal * (discountRate / 100);
}

export function calculateTotal(items: InvoiceData['items'], taxRate: number, discountRate: number): number {
    const subtotal = calculateSubtotal(items);
    const tax = calculateTax(subtotal, taxRate);
    const discount = calculateDiscount(subtotal, discountRate);
    return subtotal + tax - discount;
}
