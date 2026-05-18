export interface Tool {
  slug: string;
  name: string;
  path: string;
}

export const tools: Tool[] = [
  { slug: 'invoice-generator', name: 'Invoice Generator', path: '/' },
  { slug: 'receipt-generator', name: 'Receipt Generator', path: '/receipt-generator' },
  { slug: 'estimate-maker', name: 'Estimate Maker', path: '/tools/estimate-maker' },
  { slug: 'proforma-invoice-generator', name: 'Proforma Invoice Generator', path: '/tools/proforma-invoice-generator' },
  { slug: 'purchase-order-generator', name: 'Purchase Order Generator', path: '/tools/purchase-order-generator' },
];
