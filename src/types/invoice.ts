export interface LineItem {
    id: string;
    description: string;
    quantity: number;
    rate: number;
}

export interface ClientProfile {
    id: string;
    name: string;
    email: string;
    address: string;
}

export interface InvoiceData {
    // Logo
    logo: string;

    // Language
    language: string;

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
    paymentLink?: string;
    signature?: string;

    // Bank Details
    bankDetails?: {
        bankName: string;
        accountName: string;
        accountNumber: string;
        routingNumber?: string;
        swiftBic?: string;
    };

    // Status
    status?: 'unpaid' | 'paid';
}

export type TemplateStyle = 'modern' | 'classic' | 'minimal' | 'bold' | 'forest';

export interface Currency {
    code: string;
    symbol: string;
    name: string;
}

export interface SavedTemplate {
    id: string;
    name: string;
    data: InvoiceData;
    createdAt: string;
}
