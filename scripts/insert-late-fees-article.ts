import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing SUPABASE env vars.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const post = {
    slug: 'how-to-calculate-late-fees-on-invoice',
    title: 'How to Calculate Late Fees on an Invoice (With Examples) - 2026',
    description: 'Learn the standard methods for calculating late fees on overdue invoices, legal guidelines, and how to communicate late payment charges professionally.',
    date: new Date().toISOString().split('T')[0],
    readTime: '6 min read',
    keywords: ['calculate late fees invoice', 'invoice late fee percentage', 'how to charge late fees on an invoice', 'overdue invoice fees'],
    heroImage: '/images/blog/how-to-calculate-late-fees.png',
    content: `# How to Calculate Late Fees on an Invoice (With Examples)

Getting paid on time is critical for the survival of any freelance business or small agency. Unfortunately, overdue invoices are a common reality.

One of the most effective ways to encourage prompt payment is by implementing a clear late fee policy. But how much should you charge, and what’s the right way to calculate it?

In this guide, we’ll explain the standard methods for calculating late fees on an invoice, the legal guidelines you should consider, and how to communicate these charges to your clients without burning bridges.

## Why You Should Charge Late Fees

If you don't charge late fees, clients have no financial incentive to prioritize your invoice over others. Late fees serve two purposes:
1. **Deterrence:** They encourage clients to pay before the due date.
2. **Compensation:** They compensate you for the time spent chasing payments and the disruption to your cash flow.

Before we dive into calculations, remember that the most critical rule of late fees is **transparency**. You cannot legally or ethically tack on a late fee if it wasn't clearly stated in your original contract or proposal.

## 3 Common Methods for Calculating Late Fees

There is no single "correct" way to charge a late fee, but most businesses use one of three standard methods.

### 1. The Fixed Flat Fee

A fixed late fee is exactly what it sounds like: a set, one-time amount added to the invoice once it becomes overdue. 

**How it works:** You charge a flat amount (e.g., $25, $50, or $100) regardless of the total invoice value or how late the payment is.
**Best for:** Smaller invoices where a percentage-based fee would be too low to act as a real deterrent. 
**Example:** If your client owes you $300 and your contract specifies a $25 flat late fee, the new balance becomes $325 the day after the due date.

### 2. The Percentage-Based Fee 

This is the most common approach for B2B services. You charge a percentage of the total outstanding invoice amount.

Most businesses charge between **1% and 2% per month** that the invoice is late. 

**How to calculate a monthly percentage fee:**
Let's say a client owes you $5,000, and your terms state a 1.5% monthly late fee. 

1. Calculate the fee: \`$5,000 * 0.015 = $75\`
2. If the invoice is exactly one month late, add $75 to the total.
3. If it remains unpaid for a second month, you typically assess the fee on the *original* invoice amount (simple interest), meaning another $75 is added.

*Tip: Always double-check your state or country's usury laws. Many jurisdictions cap the maximum amount of interest you can charge on B2B transactions annually (often around 10% to 18% per year).*

### 3. Daily Interest Late Fees

For larger contracts or severely delinquent accounts, you might calculate daily interest based on an annual rate.

**How to calculate daily interest:**
Assume your contract specifies a 12% annual interest rate for late payments, and a $2,000 invoice is 15 days overdue.

1. **Calculate the daily rate:** Divide the annual rate by 365. \`12% / 365 = 0.0328% per day\`
2. **Calculate the daily interest amount:** Multiply the invoice total by the daily rate. \`$2,000 * 0.000328 = $0.66 per day\`
3. **Multiply by days overdue:** Multiply the daily amount by the days late. \`$0.66 * 15 days = $9.90\`

The total late fee for those 15 days would be $9.90, bringing the new invoice total to $2,009.90. 

## Best Practices for Enforcing Late Fees

Calculating the math is only half the battle. Here is how to implement your late fee policy professionally:

### Establish it Upfront
Your late fee policy must be established *before* you start working. Include it in your master services agreement, project proposal, or onboarding documents. 

### Put it on Every Invoice
Don't hide your terms. Clearly display your late fee policy at the bottom of every invoice you send. For example: *"Terms: Net 30. A 1.5% late fee will be applied per month on overdue balances."*

When you are ready to bill your client, you can use our [free invoice generator](/) to quickly create a professional invoice that clearly outlines your payment terms.

### Offer a Grace Period
Many freelancers offer a 5 to 7-day grace period after the due date before enforcing the fee. This preserves the client relationship if the delay was due to a simple oversight or a slow corporate accounting department.

### Send a Warning First
Never apply a late fee as a surprise. When an invoice becomes overdue, send a polite payment reminder. If it remains unpaid after your grace period, send a final notice stating that the late fee will be applied on a specific date.

### Issue a Clean, Revised Invoice
If you must apply a fee, do not just send a generic email asking for more money. Generate a new, revised invoice. Add a new line item clearly labeled "Late Payment Fee" or "Overdue Interest," showing exactly how the math was calculated. 

## FAQS

### What is the standard late fee percentage?
The standard late fee percentage in B2B transactions is typically 1% to 2% per month (which equals 12% to 24% annually). However, you must check your local state laws, as many jurisdictions cap the maximum allowable interest rate to prevent predatory lending practices.

### Can I charge a late fee if it wasn't in the contract?
No. You generally cannot legally enforce a late fee if the client did not agree to it beforehand. The late fee policy must be outlined in your contract or terms of service, and ideally highlighted on every invoice you send.

### How do I add a late fee to an invoice?
When a client triggers a late fee, you should generate an updated, revised invoice. Add a separate line item to the bottom of the invoice titled "Late Payment Charge" or something similar. Clearly state the original due date and the math used to calculate the fee, then send the updated document to the client.

## Create Professional Invoices in Seconds

Want to make sure your payment terms are crystal clear so you get paid on time? Stop messing around with messy Word documents and Excel sheets.

Use our [free invoice generator](/) to create a beautiful, professional PDF invoice in under two minutes. It’s 100% free, requires no sign-up, and all data is processed securely right in your browser.
`
  };

  const { data, error } = await supabase
    .from('blog_posts')
    .upsert(post, { onConflict: 'slug' })
    .select();

  if (error) {
    console.error('Error inserting article:', error.message);
  } else {
    console.log('✅ Article inserted successfully:', post.slug);
  }
}

main();
