export interface LineItem {
    id: string;
    description: string;
    quantity: number;
    rate: number;
}

export interface InvoiceData {
    // From
    fromName: string;
    fromEmail: string;
    fromAddress: string;
    fromPhone: string;

    // To
    toName: string;
    toEmail: string;
    toAddress: string;

    // Invoice details
    invoiceNumber: string;
    invoiceDate: string;
    dueDate: string;
    currency: string;

    // Items
    items: LineItem[];

    // Extras
    taxRate: number;
    discountRate: number;
    notes: string;
    paymentTerms: string;
}

export type TemplateStyle = 'classic' | 'modern' | 'minimal';

export interface Currency {
    code: string;
    symbol: string;
    name: string;
}
