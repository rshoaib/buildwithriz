export interface LanguageLabels {
    invoice: string;
    billTo: string;
    from: string;
    date: string;
    dueDate: string;
    description: string;
    qty: string;
    rate: string;
    amount: string;
    subtotal: string;
    tax: string;
    discount: string;
    total: string;
    notes: string;
    paymentTerms: string;
    currency: string;
}

export interface Language {
    code: string;
    name: string;
    nativeName: string;
    dir: 'ltr' | 'rtl';
    labels: LanguageLabels;
}

export const languages: Language[] = [
    {
        code: 'en',
        name: 'English',
        nativeName: 'English',
        dir: 'ltr',
        labels: {
            invoice: 'INVOICE',
            billTo: 'Bill To',
            from: 'From',
            date: 'Date',
            dueDate: 'Due Date',
            description: 'Description',
            qty: 'Qty',
            rate: 'Rate',
            amount: 'Amount',
            subtotal: 'Subtotal',
            tax: 'Tax',
            discount: 'Discount',
            total: 'Total',
            notes: 'Notes',
            paymentTerms: 'Payment Terms',
            currency: 'Currency',
        },
    },
    {
        code: 'fr',
        name: 'French',
        nativeName: 'Français',
        dir: 'ltr',
        labels: {
            invoice: 'FACTURE',
            billTo: 'Facturer à',
            from: 'De',
            date: 'Date',
            dueDate: 'Date d\'échéance',
            description: 'Description',
            qty: 'Qté',
            rate: 'Tarif',
            amount: 'Montant',
            subtotal: 'Sous-total',
            tax: 'TVA',
            discount: 'Remise',
            total: 'Total',
            notes: 'Notes',
            paymentTerms: 'Conditions de paiement',
            currency: 'Devise',
        },
    },
    {
        code: 'es',
        name: 'Spanish',
        nativeName: 'Español',
        dir: 'ltr',
        labels: {
            invoice: 'FACTURA',
            billTo: 'Facturar a',
            from: 'De',
            date: 'Fecha',
            dueDate: 'Fecha de vencimiento',
            description: 'Descripción',
            qty: 'Cant.',
            rate: 'Precio',
            amount: 'Importe',
            subtotal: 'Subtotal',
            tax: 'IVA',
            discount: 'Descuento',
            total: 'Total',
            notes: 'Notas',
            paymentTerms: 'Condiciones de pago',
            currency: 'Moneda',
        },
    },
    {
        code: 'de',
        name: 'German',
        nativeName: 'Deutsch',
        dir: 'ltr',
        labels: {
            invoice: 'RECHNUNG',
            billTo: 'Rechnungsempfänger',
            from: 'Von',
            date: 'Datum',
            dueDate: 'Fälligkeitsdatum',
            description: 'Beschreibung',
            qty: 'Menge',
            rate: 'Preis',
            amount: 'Betrag',
            subtotal: 'Zwischensumme',
            tax: 'MwSt.',
            discount: 'Rabatt',
            total: 'Gesamt',
            notes: 'Anmerkungen',
            paymentTerms: 'Zahlungsbedingungen',
            currency: 'Währung',
        },
    },
    {
        code: 'pt',
        name: 'Portuguese',
        nativeName: 'Português',
        dir: 'ltr',
        labels: {
            invoice: 'FATURA',
            billTo: 'Faturar para',
            from: 'De',
            date: 'Data',
            dueDate: 'Data de vencimento',
            description: 'Descrição',
            qty: 'Qtd.',
            rate: 'Preço',
            amount: 'Valor',
            subtotal: 'Subtotal',
            tax: 'Imposto',
            discount: 'Desconto',
            total: 'Total',
            notes: 'Notas',
            paymentTerms: 'Condições de pagamento',
            currency: 'Moeda',
        },
    },
    {
        code: 'ar',
        name: 'Arabic',
        nativeName: 'العربية',
        dir: 'rtl',
        labels: {
            invoice: 'فاتورة',
            billTo: 'فاتورة إلى',
            from: 'من',
            date: 'التاريخ',
            dueDate: 'تاريخ الاستحقاق',
            description: 'الوصف',
            qty: 'الكمية',
            rate: 'السعر',
            amount: 'المبلغ',
            subtotal: 'المجموع الفرعي',
            tax: 'الضريبة',
            discount: 'الخصم',
            total: 'الإجمالي',
            notes: 'ملاحظات',
            paymentTerms: 'شروط الدفع',
            currency: 'العملة',
        },
    },
    {
        code: 'hi',
        name: 'Hindi',
        nativeName: 'हिन्दी',
        dir: 'ltr',
        labels: {
            invoice: 'चालान',
            billTo: 'बिल प्राप्तकर्ता',
            from: 'प्रेषक',
            date: 'तारीख',
            dueDate: 'देय तिथि',
            description: 'विवरण',
            qty: 'मात्रा',
            rate: 'दर',
            amount: 'राशि',
            subtotal: 'उप-योग',
            tax: 'कर',
            discount: 'छूट',
            total: 'कुल',
            notes: 'टिप्पणियाँ',
            paymentTerms: 'भुगतान शर्तें',
            currency: 'मुद्रा',
        },
    },
    {
        code: 'ur',
        name: 'Urdu',
        nativeName: 'اردو',
        dir: 'rtl',
        labels: {
            invoice: 'انوائس',
            billTo: 'بل وصول کنندہ',
            from: 'از',
            date: 'تاریخ',
            dueDate: 'آخری تاریخ',
            description: 'تفصیل',
            qty: 'مقدار',
            rate: 'قیمت',
            amount: 'رقم',
            subtotal: 'ذیلی کل',
            tax: 'ٹیکس',
            discount: 'رعایت',
            total: 'کل',
            notes: 'نوٹس',
            paymentTerms: 'ادائیگی کی شرائط',
            currency: 'کرنسی',
        },
    },
];

export function getLanguage(code: string): Language {
    return languages.find((l) => l.code === code) || languages[0];
}

export function getLabels(code: string): LanguageLabels {
    return getLanguage(code).labels;
}
