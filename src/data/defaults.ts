import { InvoiceData } from '@/types/invoice';

// IMPORTANT: dynamic fields (invoice number, dates) MUST stay empty
// at module-load time. `Date.now()` and `new Date()` evaluated here
// produce different values on the SSR server vs the client at
// hydration, which surfaces as a "text didn't match" hydration error
// in <InvoicePreview />. The homepage `useEffect` populates these
// fields client-side on mount. See `src/app/page.tsx`.
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
    invoiceNumber: '',
    invoiceDate: '',
    dueDate: '',
    currency: 'USD',
    items: [
        { id: '1', description: '', quantity: 1, rate: 0 },
    ],
    taxRate: 0,
    discountRate: 0,
    notes: '',
    paymentTerms: 'Net 30',
    status: 'unpaid',
    bankDetails: {
        bankName: '',
        accountName: '',
        accountNumber: '',
        routingNumber: '',
        swiftBic: '',
    },
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
