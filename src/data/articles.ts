import { FileText } from 'lucide-react';

export interface BlogArticle {
    slug: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    keywords: string[];
    heroImage: string;
    icon: typeof FileText;
    content: string;
}

export const articles: BlogArticle[] = [
    {
        slug: 'quote-vs-estimate-vs-invoice',
        title: 'Quote vs Estimate vs Invoice: What\'s the Difference? (2026)',
        description:
            'Confused by quotes, estimates, and invoices? Learn exactly when to use each document, the key differences, and how they fit into your freelance billing workflow.',
        date: '2026-03-18',
        readTime: '9 min read',
        keywords: [
            'quote vs estimate vs invoice',
            'difference between quote and estimate',
            'estimate vs invoice',
            'what is a quote in business',
            'freelance billing documents',
            'when to send an estimate',
        ],
        heroImage: '/images/blog/quote-vs-estimate-vs-invoice-hero.png',
        icon: FileText,
        content: `
## Why These Three Documents Matter

If you are a freelancer, contractor, or small business owner, you have probably been asked to "send an estimate," "provide a quote," or "invoice me for that." These terms get thrown around interchangeably — but they are **not the same thing**. Each document serves a distinct purpose in the billing workflow, and confusing them can lead to lost revenue, scope disputes, and delayed payments.

Understanding the difference between a quote, an estimate, and an invoice is one of the most practical skills you can develop for your business. It protects you legally, sets clear expectations with clients, and ensures you get paid on time.

---

## What Is an Estimate?

An **estimate** is an approximate calculation of the cost and time required to complete a project. It is provided *before* any work begins and is based on your best professional judgment given the information available.

### Key Characteristics of an Estimate

- **Not legally binding** — the final cost can change as the project evolves
- **Based on assumptions** — you are working with incomplete information
- **Flexible** — clients understand that estimates are approximations
- **Used early** — typically shared during the initial discovery or proposal phase

### When to Use an Estimate

Use an estimate when the project scope is still being defined or when there are variables that could affect the final cost. For example:

- A web designer asked to "redesign our website" without a detailed brief
- A photographer quoting a multi-day event with unknown conditions
- A consultant scoping an engagement where the hours required are uncertain

**Pro tip:** Always include a disclaimer on your estimates, such as: *"This estimate is based on the information provided and may change as the project scope is finalized."*

You can create clean, detailed estimates instantly using our **[free estimate maker](/tools/estimate-maker)**.

---

## What Is a Quote?

A **quote** (also called a quotation) is a formal, fixed-price offer for a clearly defined scope of work. Once a client accepts your quote, it becomes a **binding agreement** — the price should not change unless the scope changes and both parties agree to new terms.

### Key Characteristics of a Quote

- **Legally binding** once accepted — the price is locked in
- **Fixed price** — no surprises for the client
- **Requires a clear scope** — you need to know exactly what is being delivered
- **Has an expiration date** — quotes are typically valid for 15 to 30 days

### When to Use a Quote

Use a quote when the project requirements are crystal clear and you can commit to a fixed price with confidence. For example:

- A graphic designer creating 5 social media templates at $150 each
- A developer building a specific landing page with defined deliverables
- A copywriter producing 10 blog posts at a set rate per post

### Quote vs Estimate: The Critical Difference

The biggest distinction is **commitment**. An estimate says, "I think it will cost around this much." A quote says, **"This is the exact price, and I am committing to it."**

| Feature | Estimate | Quote |
|---------|----------|-------|
| **Price** | Approximate | Fixed |
| **Binding?** | No | Yes, once accepted |
| **Scope clarity** | Low to medium | High |
| **Can change?** | Yes, as scope evolves | Only if scope changes |
| **Best for** | Complex, evolving projects | Well-defined projects |
| **Client expectation** | Rough budget range | Exact cost commitment |

---

## What Is an Invoice?

An **invoice** is a formal request for payment issued *after* the work has been completed (or after a milestone has been reached). It is a legally binding document that records the transaction for both your books and your client's accounting.

### Key Characteristics of an Invoice

- **Issued after work is done** — it is a demand for payment, not a proposal
- **Legally binding** — it creates an accounts receivable entry in your books
- **Required for taxes** — invoices are the primary records used for income reporting
- **Contains payment terms** — specifies when and how the client must pay

### What Every Invoice Must Include

A complete invoice should contain:

1. **Your business details** — name, address, email, tax ID
2. **Client details** — name, company, billing address
3. **Unique invoice number** — sequential for easy tracking
4. **Invoice date and due date** — with specific calendar dates
5. **Itemized services** — detailed descriptions with quantities and rates
6. **Subtotal, tax, and total** — clearly calculated
7. **Payment instructions** — bank details, PayPal, Stripe, etc.

For a complete walkthrough, read our guide on [how to create a professional invoice](/blog/how-to-create-professional-invoice).

Our **[free invoice generator](/)** lets you create polished PDF invoices in under two minutes — no signup, no data stored, 100% private.

---

## The Complete Comparison: Quote vs Estimate vs Invoice

Here is a side-by-side comparison of all three documents to help you understand exactly when to use each one:

| Feature | Estimate | Quote | Invoice |
|---------|----------|-------|---------|
| **When to send** | During discovery | After scope is defined | After work is completed |
| **Purpose** | Give a rough cost idea | Lock in a fixed price | Request payment |
| **Legally binding?** | No | Yes, once accepted | Yes |
| **Price type** | Approximate | Fixed | Final |
| **Can be negotiated?** | Yes | Before acceptance | No (already agreed) |
| **Accounting impact** | None | None | Accounts receivable |
| **Tax relevance** | None | None | Required for tax filing |
| **Typical validity** | Until scope is defined | 15-30 days | Until paid |

---

## The Freelancer Billing Workflow

Here is how these three documents fit together in a real-world freelance project:

### Step 1: Discovery → Send an Estimate

A potential client reaches out about a project. You discuss their needs, ask key questions, and then send an **estimate** to give them a ballpark figure. This helps them decide whether to proceed.

### Step 2: Scope Finalized → Send a Quote

Once the project scope is fully defined — deliverables, timelines, revision rounds — you send a formal **quote** with a fixed price. The client reviews it, potentially negotiates, and then accepts.

### Step 3: Work Completed → Send an Invoice

You deliver the work. Within 24 hours, you send a professional **invoice** with the agreed amount, itemized services, and clear payment terms. The client pays, and you record the transaction.

> **Key insight:** Many freelancers skip straight to invoicing without first using estimates or quotes. This leads to scope creep, price disputes, and awkward conversations about money. Using all three documents creates a **paper trail** that protects both you and your client.

---

## 5 Common Mistakes to Avoid

### 1. Using "Estimate" and "Quote" Interchangeably

These terms have different legal implications. An estimate allows price flexibility; a quote does not. Mixing them up can lead to disputes when the final cost differs from what the client expected.

### 2. Sending an Invoice Before Agreement

Never invoice a client before the scope and price are agreed upon. Always use an estimate or quote first to align expectations.

### 3. Not Including an Expiration Date on Quotes

A quote without an expiration date means a client could accept it months later when your costs have changed. Always include a validity period (e.g., "Valid for 30 days from the date of issue").

### 4. Vague Descriptions on All Three Documents

Whether it is an estimate, quote, or invoice, **specificity is everything**. "Design services — $3,000" is asking for trouble. "Homepage UI redesign (desktop + mobile, 2 revision rounds) — $3,000" is airtight.

### 5. Not Converting Estimates to Quotes

If you send an estimate and the client says "let's do it," do not just start working. Convert that estimate into a formal quote with a fixed price, get it accepted in writing, and *then* begin. This protects you if the scope changes.

---

## When Should You Use Each Document?

Here is a practical quick-reference guide:

| Scenario | Use This |
|----------|----------|
| Client asks "How much would this cost?" | **Estimate** |
| Client says "Give me a firm price" | **Quote** |
| You finished the project and need payment | **Invoice** |
| Client wants to secure a deposit | **[Proforma Invoice](/blog/proforma-invoice-vs-commercial-invoice)** |
| Ongoing retainer work, monthly billing | **Invoice** |
| Large project, need upfront payment | **Quote** + **Deposit Invoice** |

---

## Frequently Asked Questions

### Is a quote the same as an estimate?

No. A **quote** is a fixed, binding price for a defined scope of work. An **estimate** is an approximate figure that can change. The key difference is commitment — a quote locks in the price, while an estimate gives a rough range.

### Can I change a quote after the client accepts it?

Generally, no. Once a client accepts a quote, the price is binding. However, if the **scope of work changes** (e.g., the client adds new requirements), you can issue a revised quote with updated pricing. Always document scope changes in writing.

### Do I need all three documents for every project?

Not necessarily. For small, straightforward projects with clear requirements, you might skip the estimate and go directly to a quote. For recurring clients with established rates, you might only need invoices. However, using all three creates the strongest paper trail for your business.

### What is the difference between a quote and a proforma invoice?

A **quote** is a pricing proposal. A **[proforma invoice](/blog/proforma-invoice-vs-commercial-invoice)** looks like an invoice but is issued *before* work begins — it is typically used to secure a deposit or for customs documentation. A proforma invoice is not a real invoice for accounting purposes.

### How quickly should I send an invoice after completing work?

Within **24 hours**. The value of your work is highest in the client's mind right after delivery, and prompt invoicing correlates strongly with faster payments. Read our guide on [invoice payment terms](/blog/invoice-payment-terms-explained) for more tips on getting paid quickly.

---

## Create Your Documents for Free

Whether you need an estimate, a quote, or a final invoice, having clean, professional documents builds trust and gets you paid faster.

- **[Create a Free Estimate →](/tools/estimate-maker)** — Perfect for initial project proposals
- **[Create a Free Invoice →](/)** — Professional PDF invoices in under two minutes
- **[Create a Purchase Order →](/tools/purchase-order-generator)** — For procurement and supplier payments

All our tools are 100% free, require no signup, and process everything securely in your browser. Your data never leaves your device.

**[Get Started Now →](/)**
        `,
    },
    {
        slug: 'how-to-write-invoice-freelance-work',
        title: 'How to Write an Invoice for Freelance Work (Free Template & Guide)',
        description:
            'A complete guide on how to write a professional freelance invoice. Learn exactly what to include to get paid faster, avoid common mistakes, and use our free generator.',
        date: '2026-03-10',
        readTime: '8 min read',
        keywords: [
            'how to write an invoice for freelance work',
            'freelance invoice template',
            'how to invoice a client',
            'freelancer invoice guide',
            'create freelance invoice',
            'what to include on an invoice',
        ],
        heroImage: '/images/blog/freelance_invoice_guide_hero.png',
        icon: FileText,
        content: `
## Why Your Freelance Invoice Matters

As a freelancer, your invoice is the final touchpoint of your project. It is not just about asking for money—it is a professional document that reflects your brand, establishes legal clarity, and dictates how quickly you get paid. 

A vague, poorly formatted invoice almost guarantees payment delays because it forces the client's accounting department to ask follow-up questions. A crisp, detailed invoice, on the other hand, sails smoothly through the payment process.

---

## 7 Essential Things to Include on a Freelance Invoice

To write an effective invoice for freelance work, you must include the following key elements to ensure clarity and timely payment:

### 1. Your Information
Make it incredibly easy for the client to know who sent the invoice. Include:
- Your full name or business name
- Your mailing address
- Your phone number and professional email address
- Your business logo (highly recommended for a professional look)
- Your Tax ID or business registration number (if required by your local laws)

### 2. The Client's Information
Address the invoice to the specific person or department responsible for paying you. Include:
- The client's full name or company name
- The client's billing address
- The contact person's name and email
- Any specific company requirements, such as a **Purchase Order (PO) number**. (Always ask your client if they require a PO number before sending your invoice!)

### 3. Invoice Specifics
Every invoice must be easily identifiable and legally compliant. Ensure you have:
- **A Clear Label:** The document should literally have the word "INVOICE" written prominently at the top.
- **A Unique Invoice Number:** Assign a unique, sequential number to each invoice (e.g., \`INV-001\`, \`INV-002\`) to make tracking and tax preparation easier.
- **Invoice Date:** The exact date you issued the document.
- **Payment Due Date:** Do not just write "Net 30." Write the exact calendar date the payment is due (e.g., "Due on April 9, 2026") to eliminate any confusion.

### 4. Itemized Services
Never use vague terms like "Freelance Services." Break down the work meticulously by task:
- Describe the specific type of service (e.g., "UI/UX Design for Homepage Layout").
- Include the quantity or hours worked.
- State your rate (hourly or project-based).
- Specify the project milestones or clear deliverables achieved.

### 5. Financial Details
The math must be perfect. Display:
- **Subtotal:** The cost of services before any taxes.
- **Taxes:** If you are required to charge VAT or sales tax, list it clearly on its own line.
- **Discounts:** If you offered a discount, show it explicitly so the client sees the value they received.
- **Total Amount Due:** The final, bolded amount the client needs to pay.

### 6. Payment Terms and Methods
Clearly state *how* you expect to be paid. Provide step-by-step instructions:
- List your accepted payment methods (e.g., Bank Transfer, PayPal, Stripe).
- Provide the exact routing and account numbers for bank transfers.
- Mention your late payment policy (e.g., "A 1.5% late fee applies per month after the due date").

### 7. A Professional Thank You Note
A simple "Thank you for your business! It was a pleasure working with you on this project." goes a long way in building long-term client relationships.

---

## The Best Payment Terms for Freelancers

If you are just starting out, you might be wondering when to actually make your invoices due. 

- **Due on Receipt:** Payment is expected immediately. Excellent for small, one-off projects.
- **Net 15:** Payment is due within 15 days. *This is the recommended standard for most freelancers.*
- **Net 30:** Payment is due within 30 days. Common with larger corporate clients, but can strain a freelancer's cash flow.

Whenever possible, push for Net 15 terms. If a client insists on Net 30, it is highly recommended to request a **50% upfront deposit** before starting the work.

*(For a deeper dive into this, read our comprehensive guide on [Invoice Payment Terms Explained](/blog/invoice-payment-terms-explained).)*

---

## The Fastest Way to Create a Freelance Invoice

You don't need expensive accounting software to write a professional invoice. Utilizing a professional template ensures consistency and saves you hours of formatting in Word or Google Docs.

Our **[free invoice generator](/)** is built specifically for freelancers and independent contractors. It allows you to:
- Instantly generate a massive, clean PDF.
- Add your own custom logo.
- Calculate taxes and subtotals automatically.
- Do it all 100% securely in your browser—no signup required, and your financial data is never stored on a server.

**[Create Your Freelance Invoice Now →](/)**
    `,
    },
    {
        slug: 'how-to-create-professional-invoice',
        title: 'How to Create a Professional Invoice: Complete Guide for Freelancers (2026)',
        description:
            'Learn how to create professional invoices that get you paid faster. Covers essential fields, best practices, common mistakes, and a free invoice generator — no signup required.',
        date: '2026-03-08',
        readTime: '10 min read',
        keywords: [
            'how to create an invoice',
            'professional invoice template',
            'freelancer invoice guide',
            'free invoice generator',
            'invoice best practices 2026',
        ],
        heroImage: '/images/blog/how-to-create-invoice-hero.png',
        icon: FileText,
        content: `
## Why Professional Invoicing Matters

An invoice is more than just a bill — it is a **critical business document** that establishes trust, protects you legally, and directly impacts how quickly you get paid. Studies consistently show that well-structured, professional invoices are paid up to **2× faster** than informal emails or vague payment requests.

For freelancers, contractors, and small business owners, mastering the art of invoicing is one of the most practical things you can do to improve your cash flow and grow your business. In 2026, with more people freelancing than ever before, having a streamlined invoicing system is no longer optional — it is essential.

### The Key Benefits of a Great Invoice

| Benefit | Why It Matters |
|---------|---------------|
| **Faster payments** | Clear invoices reduce client confusion and processing delays |
| **Legal protection** | Invoices serve as legal proof of agreed-upon transactions |
| **Tax organization** | Each invoice is a revenue record for tax preparation |
| **Professional image** | Polished invoices signal that you run a serious business |
| **Dispute prevention** | Itemized descriptions eliminate scope disagreements |

---

## What Every Invoice Must Include

A complete invoice should contain the following fields. Missing even one of these can delay payment or cause confusion:

### 1. Your Business Information
Include your **full name or business name**, address, email, phone number, and tax ID or registration number if applicable. This makes it easy for the client's accounting team to process your invoice without asking follow-up questions.

### 2. Client Information
Always include the **client's name, company, and billing address**. For larger companies, include the name of your point of contact and any purchase order (PO) number they may require.

### 3. Unique Invoice Number
Use a **sequential, unique numbering system** to keep your records organized. A common format is \`INV-2026-001\`, \`INV-2026-002\`, and so on. This is not just good practice — many tax authorities require it.

### 4. Invoice Date and Due Date
Clearly state when the invoice was issued and when payment is due. Common payment terms include:

- **Due on Receipt** — payment expected immediately
- **Net 15** — payment due within 15 days (recommended for freelancers)
- **Net 30** — payment due within 30 days (standard for corporate clients)
- **Net 60** — payment due within 60 days (common for enterprise clients)

### 5. Itemized Line Items
This is the most important part. **Break down every service or product** with quantities, rates, and descriptions. Avoid vague entries like "Design Work" — instead, be specific:

| Item | Quantity | Rate | Amount |
|------|----------|------|--------|
| Homepage UI Design (desktop + mobile) | 1 | $800.00 | $800.00 |
| Blog Page Template | 2 | $400.00 | $800.00 |
| Logo Revision (round 2) | 1 | $150.00 | $150.00 |

Detailed line items build trust, reduce client questions, and make disputes nearly impossible.

### 6. Subtotal, Tax, and Total
Show the **subtotal** before tax, the **tax rate and amount**, any discounts, and the **final total due**. Make the total amount visually prominent — it should be the first number a client sees.

### 7. Payment Instructions
Do not leave clients guessing how to pay you. Include:

- **Bank transfer details** (account number, routing number, bank name)
- **Digital payment links** (PayPal, Stripe, Wise)
- **Accepted payment methods** (credit card, ACH, wire transfer)

### 8. Notes and Terms
Add any relevant notes — project milestones, warranty information, or a simple "Thank you for your business." This is also where you can specify late payment fees (typically 1.5% per month) and your cancellation policy.

---

## Step-by-Step: How to Create Your Invoice

Follow this process to create a professional invoice in under two minutes:

### Step 1: Choose Your Tool
You can use an accounting app, a spreadsheet template, or a **free online invoice generator**. [BuildWithRiz's free invoice generator](/) lets you create professional PDF invoices without any signup, login, or data storage — everything runs in your browser.

### Step 2: Enter Your Business Details
Fill in your name or company name, address, and contact information. If you create invoices regularly, use a tool that lets you save templates to avoid re-entering this information.

### Step 3: Add Client Information
Enter your client's name, business name, and billing address. Include a PO number if provided.

### Step 4: Describe Your Work
Add detailed line items for each deliverable or time period. Be specific about what was delivered, the quantity, and the agreed rate.

### Step 5: Set Payment Terms
Choose your payment deadline (Net 15 is recommended for freelancers) and include accepted payment methods and bank details.

### Step 6: Review and Send
Double-check all amounts, verify the client information, and preview the invoice before downloading. Save the PDF and send it via email with a brief professional message.

> **Pro tip:** Send invoices within 24 hours of completing the work. The value is highest in your client's mind at that point, and prompt invoicing correlates strongly with faster payments.

---

## 7 Invoicing Best Practices for 2026

### 1. Invoice Immediately
Do not wait until the end of the month. Invoice as soon as a milestone or project is completed. Delays in invoicing lead to delays in payment — and sometimes to forgotten invoices entirely.

### 2. Be Ruthlessly Specific
Every line item should describe exactly what was delivered. "Web design — Phase 1 (5 pages, mobile-responsive, including 2 revision rounds)" is far better than "Design services."

### 3. Use Professional Templates
A branded, clean invoice reflects the quality of your work. Use consistent fonts, your logo (if applicable), and a color scheme that matches your brand. Our [free invoice generator](/) produces professional PDF invoices instantly.

### 4. Offer Multiple Payment Options
The easier you make it for clients to pay, the faster you will receive payment. Offer at least two methods — bank transfer and a digital option like PayPal or Stripe.

### 5. Follow Up, Always
A friendly reminder 2-3 days before the due date, and again on the day it is due, can dramatically reduce late payments. Most late payments are simply oversights.

### 6. Track Every Invoice
Maintain a spreadsheet or use invoicing software to track:
- Invoice number and date
- Client name
- Amount
- Status (sent, paid, overdue)

### 7. Include Late Payment Terms
State your late payment fee in your invoice notes (e.g., "A 1.5% monthly fee applies to invoices overdue by more than 15 days"). This sets clear expectations and incentivizes on-time payment.

---

## Common Invoicing Mistakes to Avoid

Even experienced freelancers make these mistakes. Knowing them will help you avoid payment delays and damaged client relationships:

1. **Invoicing late** — Sending invoices weeks after the work is done signals that payment is not a priority for you. Invoice within 24 hours.

2. **Vague descriptions** — "Consulting services — $2,000" invites questions. Always itemize.

3. **Missing payment terms** — Without a clear due date, clients will process your invoice whenever it is convenient for them.

4. **Inconsistent numbering** — Duplicate or non-sequential invoice numbers create chaos during tax season and audits.

5. **No payment instructions** — If a client has to email you to ask how to pay, you have already lost time.

6. **Forgetting tax information** — Always include applicable tax rates and your tax ID number.

7. **Not following up** — A single reminder can recover thousands of dollars in overdue invoices. Do not let politeness cost you money.

---

## Choosing the Right Invoice Tool

There are many invoicing options available in 2026, ranging from full accounting suites to simple generators. Here is how they compare:

| Feature | Free Generators | Accounting Software | Manual Templates |
|---------|----------------|-------------------|-----------------|
| **Cost** | Free | $10–$50/month | Free |
| **Speed** | Instant | Moderate | Slow |
| **Privacy** | Varies (some store data) | Cloud-stored | Your device only |
| **Learning curve** | None | Moderate–high | Low |
| **Features** | PDF creation, multi-currency | Full accounting, tracking | Basic formatting |
| **Best for** | Freelancers, quick invoices | Growing businesses | One-off invoices |

### Why Client-Side Generators Are the Future

Most online tools require you to create an account and upload your business data to their servers. For freelancers handling sensitive client information, this raises legitimate privacy concerns.

**Client-side generators** like [BuildWithRiz](/) process everything in your browser. Your data never leaves your device — no account, no cloud storage, no tracking. The PDF is generated locally and downloaded directly to your computer.

---

## Frequently Asked Questions

### What is the difference between an invoice and a receipt?
An **invoice** is sent before payment to request payment for services or goods. A **receipt** is sent after payment to confirm the transaction. You should always send an invoice first, then provide a receipt once paid.

### Do I need to charge sales tax on my freelance invoices?
This depends on your jurisdiction, the type of service, and where your client is located. In many cases, freelancers are required to collect and remit sales tax. Consult a tax professional for your specific situation.

### How long should I keep my invoices?
Most tax authorities recommend keeping invoices for at least **5-7 years**. Store both digital and physical copies in a well-organized system for easy retrieval during audits.

### Can I use a free invoice generator for my business?
Absolutely. Free invoice generators produce the same professional PDF output as paid software. The key difference is that free tools typically focus on invoice creation, while paid software adds accounting, time tracking, and client management features.

### What should I do if a client does not pay?
First, send a friendly reminder. If there is no response after 7 days, send a formal follow-up referencing the invoice number and due date. For invoices overdue by 30+ days, consider escalating to a collection process or withholding further work until the balance is settled.

---

## Start Creating Professional Invoices Now

Ready to send your first professional invoice? Our **[free invoice generator](/)** requires no signup, stores no data, and produces crisp PDF invoices in under two minutes. Choose from 30+ currencies, add detailed line items, and download instantly.

**[Create Your Free Invoice →](/)**
    `,
    },
    {
        slug: 'invoice-payment-terms-explained',
        title: 'Invoice Payment Terms Explained (2026): How to Get Paid 2x Faster',
        description:
            'Tired of late freelancer payments? Master invoice payment terms like Net 15 vs Net 30. Discover proven billing strategies to instantly boost your cash flow.',
        date: '2026-03-08',
        readTime: '9 min read',
        keywords: [
            'invoice payment terms',
            'net 15 vs net 30',
            'due on receipt meaning',
            'freelancer payment terms',
            'invoice due date explained',
            'net 30 payment terms',
        ],
        heroImage: '/images/blog/invoice-payment-terms-hero.png',
        icon: FileText,
        content: `
## What Are Invoice Payment Terms?

Invoice payment terms are the **conditions you set on an invoice** that tell your client when and how to pay. They define the deadline, accepted payment methods, and any penalties for late payment. Getting these right is one of the simplest ways to improve your cash flow as a freelancer.

Think of payment terms as the rules of engagement for getting paid. Without them, clients default to paying whenever it suits them — which is often much later than you need.

> **Key takeaway:** Clear, upfront payment terms reduce late payments by up to 40% and eliminate awkward follow-up conversations.

---

## Common Payment Terms Every Freelancer Should Know

Here is a breakdown of the most widely used payment terms, what they mean, and when to use each one:

### Due on Receipt

Payment is expected **immediately** upon receiving the invoice. This is the most aggressive term and works best for:

- One-time projects with new clients
- Small deliverables under $500
- Rush or expedited work

### Net 15

The client has **15 calendar days** from the invoice date to pay. This is the **recommended default for most freelancers** because it balances professionalism with cash flow protection.

### Net 30

The client has **30 calendar days** to pay. This is the most common term in corporate environments and is often required when working with larger companies or agencies.

### Net 60

Payment is due within **60 calendar days**. This is primarily used in enterprise contracts and government work. Freelancers should avoid Net 60 unless the project value justifies the wait.

### 50% Upfront / 50% on Completion

A **split payment structure** where you collect half the project fee before starting and the remaining half upon delivery. This is ideal for projects over $2,000 and significantly reduces your financial risk.

### Milestone Payments

Payments tied to **specific project deliverables** — for example, 25% at kickoff, 25% at design approval, 50% at final delivery. Best for long-running projects spanning multiple weeks or months.

---

## Payment Terms Comparison Table

| Term | Payment Window | Best For | Risk Level | Cash Flow Impact |
|------|---------------|----------|------------|-----------------|
| **Due on Receipt** | Immediate | Small projects, new clients | Very Low | Excellent |
| **Net 15** | 15 days | Most freelance work | Low | Very Good |
| **Net 30** | 30 days | Corporate clients, agencies | Medium | Moderate |
| **Net 60** | 60 days | Enterprise, government | High | Poor |
| **50/50 Split** | Upfront + on delivery | Projects over $2,000 | Very Low | Very Good |
| **Milestone** | At each deliverable | Long-term projects | Low | Good |

---

## How to Choose the Right Payment Terms

Choosing the right terms depends on four factors: **project size, client type, your cash flow needs, and your leverage**. Here is a practical decision framework:

### For New Clients

Start with **Due on Receipt** or **Net 15**. You have no payment history with this client, so shorter terms protect you. You can always extend terms later once trust is established.

### For Corporate Clients

Many large companies require **Net 30** as a standard procurement policy. If a client insists on Net 30, consider:

- Requesting a **deposit** of 25-50% upfront
- Adding a **2% early payment discount** for payments within 10 days
- Including a **late payment fee** of 1.5% per month

### For Ongoing Retainer Work

Use **Net 15** with invoices sent on the 1st and 15th of each month. This creates a predictable payment rhythm that works for both parties.

### For Large Projects ($5,000+)

Always use **milestone payments** or a **50/50 split**. Never start a large project without at least 25-50% upfront. This is standard practice and no serious client will object.

---

## 5 Tips to Get Paid Faster

### 1. State Terms Before Starting Work

Include your payment terms in your **contract or proposal** — not just on the invoice. When clients agree to terms before work begins, they are far more likely to honor them.

### 2. Invoice Immediately

Send your invoice within **24 hours** of completing the work. The value of your work is highest in the client's mind right after delivery. Our [free invoice generator](/) lets you create and send professional PDF invoices in under two minutes.

### 3. Offer Multiple Payment Methods

The easier you make it to pay, the faster you get paid. Offer at least two options:

- Bank transfer (ACH or wire)
- Digital payments (PayPal, Stripe, or Wise)

### 4. Add Early Payment Incentives

A small discount can dramatically accelerate payments. Common incentives include:

| Incentive | How It Works |
|-----------|-------------|
| **2/10 Net 30** | 2% discount if paid within 10 days; full amount due in 30 |
| **1/15 Net 30** | 1% discount if paid within 15 days |
| **5% upfront discount** | 5% off the total if the full amount is paid before work begins |

### 5. Enforce Late Payment Fees

State a clear late fee in your invoice notes — typically **1.5% per month** on overdue balances. Even if you never enforce it, the presence of a late fee motivates timely payment.

---

## How to Add Payment Terms to Your Invoice

Every professional invoice should display payment terms prominently. Here is what to include:

1. **Due date** — A specific calendar date, not just "Net 30"
2. **Accepted methods** — Bank transfer, PayPal, credit card, etc.
3. **Late fee clause** — "A 1.5% monthly fee applies to invoices overdue by more than 15 days"
4. **Early payment discount** (optional) — "2% discount if paid within 10 days"

Using a tool like [BuildWithRiz's free invoice generator](/) makes this process effortless. You can set payment terms, add detailed line items, and download a professional PDF — all without creating an account or storing any data.

For a complete walkthrough of creating your first invoice, see our guide on [how to create a professional invoice](/blog/how-to-create-professional-invoice).

---

## Frequently Asked Questions

### What does "Net 30" mean on an invoice?

**Net 30** means the client has 30 calendar days from the invoice date to submit payment. It is the most common payment term in business-to-business transactions. For freelancers, Net 30 can strain cash flow — consider using Net 15 instead.

### Is Net 15 or Net 30 better for freelancers?

**Net 15 is generally better for freelancers.** It cuts the payment window in half, improving cash flow without being overly aggressive. Reserve Net 30 for established clients or corporate contracts that require it.

### Can I charge a late fee on overdue invoices?

Yes — in most jurisdictions, you can charge a late fee as long as it is **clearly stated on the invoice** and agreed upon in advance (ideally in your contract). A standard rate is 1-2% per month on the overdue balance.

### Should I ask for a deposit before starting work?

**Absolutely.** For any project over $1,000, requesting a 25-50% deposit is standard practice. It protects you financially and signals that the client is committed to the project.

### What payment terms should I use for my first client?

Start with **Due on Receipt** or **Net 15**. As you build trust and establish a working relationship, you can extend terms to Net 30 if the client requests it.

---

## Set Your Payment Terms and Get Paid

Clear payment terms are the foundation of a healthy freelance business. Choose terms that match your project size and client type, state them upfront, and always include them on your invoices.

Ready to create a professional invoice with clear payment terms? Our **[free invoice generator](/)** handles everything — multiple currencies, detailed line items, and instant PDF downloads. No signup, no data stored, completely private.

**[Create Your Free Invoice →](/)**
    `,
    },
    {
        slug: 'proforma-invoice-vs-commercial-invoice',
        title: 'Proforma Invoice vs. Commercial Invoice: What Freelancers Need to Know (2026)',
        description:
            'Learn the difference between proforma and commercial invoices. Discover when freelancers should use a proforma invoice to secure deposits and how to use our free invoice generator.',
        date: '2026-03-10',
        readTime: '8 min read',
        keywords: [
            'proforma invoice vs commercial invoice',
            'what is a proforma invoice',
            'commercial invoice meaning',
            'freelance proforma invoice',
            'proforma vs regular invoice',
        ],
        heroImage: '/images/blog/proforma-vs-commercial-hero.png',
        icon: FileText,
        content: `
## What Is a Proforma Invoice?

A **proforma invoice** is a preliminary bill or estimated quote that you send to a client *before* any work begins or goods are delivered. It outlines the exact scope of work, the estimated costs, and the terms of the agreement.

Despite having "invoice" in the name, a proforma invoice is **not a legal demand for payment**. It does not go into your accounting books as revenue, and your client cannot use it to claim tax deductions.

### Why Freelancers Use Proforma Invoices

For freelancers, a proforma invoice is an excellent tool for **setting expectations and securing deposits**. 

If a new client wants to hire you for a $5,000 website redesign, you do not want to start coding based on a vague email thread. Instead, you send a detailed proforma invoice outlining the project milestones and requesting a 50% upfront deposit. Once the client approves it and pays the deposit, you convert that proforma invoice into a real, legally binding commercial invoice for your accounting records.

---

## What Is a Commercial Invoice?

A **commercial invoice** (often just called an "invoice") is the real deal. It is a formal, legally binding document issued *after* the services have been rendered or the goods have been delivered. It serves as an official request for payment.

When you send a commercial invoice, it becomes an **account receivable** in your bookkeeping software. It is a permanent record of the transaction and is fully binding. If you are ever audited by tax authorities, commercial invoices are the documents they want to see.

### The Most Common Denominator

When freelancers talk about "sending an invoice," they almost always mean a commercial invoice. This is the document you generate at the end of a project (or milestone) to get paid for the work you just finished.

---

## Proforma vs. Commercial Invoice: Key Differences

Understanding when to use which document will save you headaches at tax time. Here is the breakdown:

| Feature | Proforma Invoice | Commercial Invoice |
|---------|-----------------|--------------------|
| **When to send it** | **Before** the work begins | **After** the work is done |
| **Primary purpose** | Offer an estimate / Secure a deposit | Demand final payment |
| **Legal status** | Not binding (can be negotiated) | Legally binding |
| **Accounting impact** | No entry in your books | Recorded as accounts receivable |
| **Tax use** | Cannot be used for tax purposes | Used for income and sales tax |

---

## When Should Freelancers Use a Proforma Invoice?

If a proforma invoice isn't a "real" invoice, why bother using one at all? Here are three scenarios where freelancers benefit hugely from proforma invoices:

### 1. Requesting Upfront Deposits
Never start a massive project without a deposit. Rather than sending a completely informal "please pay me 25% now" email, send a highly detailed proforma invoice. It looks incredibly professional and makes it easy for the client's accounting department to process the initial transfer.

### 2. Formalizing Complex Proposals
If your freelance work involves variable costs (like server usage, stock photos, or ad spend), the final cost might change. A proforma invoice acts as a "good faith estimate" that allows the client to see exactly what they *should* expect to pay, while giving you the flexibility to adjust the final commercial invoice if the scope creeps slightly.

### 3. International Clients & Customs
If you sell physical goods (like custom artwork, printed materials, or hardware prototypes) to international clients, customs authorities often require a proforma invoice to assess duties and taxes *before* the goods even ship. 

---

## Can You Pay a Proforma Invoice?

Yes, clients absolutely can (and do) issue payments based on a proforma invoice—this is exactly how you secure your upfront deposit! 

However, from an accounting and tax perspective, the transaction is not complete until a **commercial invoice** is issued. Once you receive the deposit based on your proforma invoice, you must eventually issue a commercial invoice to officially close out the transaction and record the revenue.

---

## Common Mistakes to Avoid

1. **Forgetting to issue the final invoice:** If a client pays your entire fee upfront based on a proforma invoice, you still must send them a commercial invoice marked "Paid in Full" for both of your tax records.
2. **Confusing your accountant:** Don't mix your proforma invoices with your real invoices in your accounting software. Keep them separate. Proforma invoices shouldn't have sequential invoice numbers that overlap with your real ones.
3. **Not having clear payment terms:** Even on a proforma invoice, clearly state that this is an estimate and outline your terms. Read our guide to [Net 15 vs Net 30 payment terms](/blog/invoice-payment-terms-explained) to get this right.

---

## Create Your Invoices for Free

Whether you need a proforma quote or a final commercial invoice, formatting matters. A clean, branded document builds immediate trust with new clients.

Our **[free invoice generator](/)** lets you create both. Just change the document title from "Invoice" to "Proforma Invoice", itemize your estimates, and download a professional PDF instantly in your browser.

- No signup required
- Nothing stored on our servers
- 100% free and private

**[Create Your First Invoice Now →](/)**
        `,
    },
    {
        slug: 'what-happens-if-client-doesnt-pay-invoice',
        title: "What Happens If a Client Doesn't Pay an Invoice? (2026)",
        description:
            "Unpaid invoices ruin cash flow. Learn what happens when a client doesn't pay an invoice, the steps to collect your money, and use our free generator.",
        date: '2026-03-12',
        readTime: '9 min read',
        keywords: [
            "what happens if a client doesn't pay an invoice",
            'unpaid freelance invoice',
            'client not paying invoice',
            'freelance debt collection',
            'late payment fees',
        ],
        heroImage: '/images/blog/what-happens-unpaid-invoice-hero.png',
        icon: FileText,
        content: `
## The Reality of Unpaid Invoices

Every freelancer's worst nightmare is delivering amazing work and then facing radio silence on payday. An unpaid invoice does more than just frustrate you—it actively damages your business. 

When a client doesn't pay an invoice, it disrupts your cash flow, strains your ability to pay your own bills, and forces you to waste unbilled hours playing debt collector. But you are not powerless. Knowing exactly how to handle an overdue invoice is a crucial skill for any independent professional.

---

## 5 Steps to Take When a Client Doesn't Pay

If your invoice is officially past due, do not panic. Follow this systematic escalation process to recover your funds without immediately burning the client relationship.

### 1. Day 1: The Friendly Reminder
Most late payments are genuine oversights. The client might have missed your email or forgotten to forward it to their accounting department. 

On the exact day the invoice becomes overdue, send a polite, brief email:
> *"Hi [Name], I'm checking in on Invoice #001 for [Project Name]. It was due today. Could you please confirm if this has been processed? I've attached another copy for your convenience. Thanks!"*

**Action:** Attach the original PDF invoice again so they don't have to search their inbox.

### 2. Day 15: The Direct Follow-Up & Late Fees
If two weeks have passed with no payment, it's time to escalate. Your tone should shift from "friendly reminder" to "firm request."

If your initial contract and invoice stated a late fee (typically 1.5% to 2% per month), now is the time to apply it.
> *"Hi [Name], Invoice #001 is now 15 days past due. As per our agreement, a 1.5% late fee has been added to the balance. Please find the updated invoice attached. Please process this payment immediately to avoid further fees."*

**Action:** Stop any ongoing work for this client until the balance is cleared.

### 3. Day 30: The Phone Call
Emails can be ignored; phone calls are harder to dodge. If an invoice is 30 days overdue, pick up the phone.

Speak directly to the client or their accounts payable department. Be polite but direct: *"I am calling regarding an unpaid balance of $X from last month. What is the status of this payment?"* This often uncovers hidden issues, like a forgotten approval process or temporary cash flow problems on their end.

### 4. Day 60: The Formal Demand Letter
If communication has completely broken down, send a formal **Letter Before Action** (or Demand Letter). 

This letter should detail:
- The original invoice date and amount
- A timeline of your previous attempts to collect payment
- The final deadline for payment (e.g., 7 days)
- A clear statement that failure to pay will result in legal action or being sent to collections.

*(Note: Having a lawyer draft this letter on their firm's letterhead dramatically increases its effectiveness).*

### 5. Day 90+: Legal Action or Collections
At this stage, the client is actively avoiding payment. You have two main options:

- **Collection Agency:** You can hire a debt collection agency to recover the funds. They will handle the aggressive follow-ups, but they will take a percentage (often 20% to 50%) of the recovered amount.
- **Small Claims Court:** For amounts under your local small claims limit (usually $5,000 to $10,000), you can file a lawsuit without a lawyer. You will need your contract, your invoice, and a record of all your communication.

---

## Can You Charge Late Fees?

Yes, but only if you established this rule *before* the work began. 

You cannot legally pull a late fee out of thin air if it wasn't mentioned in your contract or on your original invoice. This is why having **clear payment terms** is essential. 

Standard late fees are usually **1.5% to 2% per month** on the overdue balance. Ensure your initial invoice explicitly states: *"A 1.5% monthly late fee applies to all balances overdue by more than 15 days."*

---

## Prevent Unpaid Invoices Before They Happen

The best way to handle an unpaid invoice is to prevent it from happening in the first place. You can dramatically reduce late payments by using these three strategies:

1. **Ask for an Upfront Deposit:** Never start a project over $500 without securing a 25% to 50% deposit via a [proforma invoice](/blog/proforma-invoice-vs-commercial-invoice).
2. **Use Net 15 Terms:** Instead of giving clients 30 days to pay, use Net 15 to enforce a tighter payment window. Read our guide on [invoice payment terms](/blog/invoice-payment-terms-explained) to learn more.
3. **Send Professional, Clear Invoices:** Vague invoices get delayed by accounting departments. Professional, itemized invoices get processed immediately.

## Create Invoices That Get Paid Fast

Do not let amateur invoices cost you money. Our **[free invoice generator](/)** makes it incredibly easy to set clear payment terms, automatically calculate totals, and add late fee clauses to your notes—all in a beautifully formatted PDF.

- No signup required
- Stores no data on our servers
- 100% free forever

**[Create Your Professional Invoice Now →](/)**
        `,
    },
];
