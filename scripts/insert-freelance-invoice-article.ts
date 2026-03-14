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
    slug: 'how-to-write-invoice-freelance-work',
    title: 'How to Write an Invoice for Freelance Work (The 2026 Guide)',
    description: 'Learn the essential elements of a freelance invoice and discover best practices to ensure you get paid on time for your remote work.',
    date: new Date().toISOString().split('T')[0],
    readTime: '5 min read',
    keywords: ['how to write an invoice for freelance work', 'freelance invoice', 'invoice requirements for freelancers', 'get paid faster freelance'],
    heroImage: '/images/blog/how-to-write-freelance-invoice.png',
    content: `# How to Write an Invoice for Freelance Work (The 2026 Guide)

As a freelancer, your invoice is often the final touchpoint you have with a client on a project. It’s not just a request for money; it’s a reflection of your professionalism. 

A confusing or incomplete invoice can lead to delayed payments, accounting headaches, and frustrated clients. On the other hand, a clean, well-structured invoice ensures you get paid quickly and leaves a lasting positive impression.

In this guide, we’ll break down exactly how to write an invoice for freelance work, what essential elements you must include, and best practices to ensure your cash flow remains healthy.

## The Essential Elements of a Freelance Invoice

Whether you are a graphic designer, a freelance writer, or a software developer, every professional invoice needs to contain the same core components. Missing any of these can flag your invoice in your client's accounts payable department, leading to massive delays.

### 1. The Header and Contact Information
Your invoice should clearly identify who is billing whom. 
*   **Your Info:** Include your business name (or full name), address, email, and phone number. Adding a professional logo adds a great touch.
*   **Client Info:** Include their company name, billing address, and the specific contact person’s name and email. 

### 2. A Unique Invoice Number
Never send an invoice without a unique, sequential invoice number. This is crucial for both your bookkeeping and your client's records. 
*   *Tip:* You don't have to start at \`001\`. You can use a system like \`2026-001\` or include the client's initials like \`ACME-100\`. 

### 3. Invoice Date and Payment Due Date
*   **Issue Date:** The exact date you are sending the invoice.
*   **Due Date:** When the payment is expected. Don't just write "Net 30." Be explicit: "Due Date: March 30, 2026."

### 4. Itemized Description of Services
This is where disputes happen. Be as detailed as possible so the client knows exactly what they are paying for.
*   **For Hourly Work:** List the task, your hourly rate, the number of hours worked, and the line total.
*   **For Flat-Rate Projects:** Break down the project into specific deliverables (e.g., "Homepage Copywriting," "About Page Rewrite").

### 5. The Total Amount Due
Clearly display the subtotal, any relevant taxes, discounts, and the final total amount due. Make the final number bold and easy to find at a glance.

### 6. Clear Payment Terms and Methods
How do you want to be paid? State your accepted payment methods clearly. If you accept bank transfers, include your account routing details. If you use PayPal or Stripe, state that as well.

This is also where you should clearly state your policy on late payments. If you aren't sure how to approach this, read our guide on [how to calculate late fees on an invoice](/blog/how-to-calculate-late-fees-on-invoice) and [what happens if a client doesn't pay an invoice](/blog/what-happens-if-client-doesnt-pay-invoice).

## Best Practices to Get Paid Faster

Writing the invoice is only step one. Here are some pro-tips to ensure you actually get the money in your bank account on time.

### The "Rule of 24"
Don't wait until the end of the month to send your invoice if the project is complete. Send the invoice within 24 hours of delivering the final work. The value of your work is freshest in the client's mind right after delivery.

### Offer Early Payment Discounts
Want to incentivize clients to pay immediately? Offer a "Net 10" discount. For example, "2% discount if paid within 10 days; otherwise full amount due in 30 days."

### Automate and Use Templates
Creating an invoice from scratch in a Word document every time is a massive waste of your valuable, billable hours. Using a structured template ensures you never forget an essential element like an invoice number or a due date.

## Make Your Next Invoice in 2 Minutes

You didn't become a freelancer to spend your time formatting spreadsheets. You want to do the work you love and get paid for it efficiently.

Instead of fighting with margins and fonts, use our [free invoice generator](/) to create a stunning, professional PDF invoice in under two minutes by simply filling out a clean form.

There are **no accounts to create**, and the tool is **100% free forever**. Better yet, for your privacy and security, all data is processed locally right in your browser. We never save your financial data or your clients' information on our servers. 

Need a different format? We also offer a [proforma invoice generator](/tools/proforma-invoice-generator) and a [free receipt generator](/tools/receipt-generator) tailored for small businesses.`
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
