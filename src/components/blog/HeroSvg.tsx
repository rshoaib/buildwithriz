import { JSX } from 'react';

/**
 * Inline SVG hero illustrations for blog posts.
 *
 * Each post has a unique, thematic illustration rendered as inline SVG —
 * no external image assets, no CDN dependencies. All artwork ships
 * with the project, so there's no backend or image-storage dependency.
 *
 * Usage:
 *   <HeroSvg slug="how-to-set-up-recurring-invoices" />
 *   <HeroSvg slug={article.heroKey} className="..." />
 */

type HeroKey =
  | 'how-to-set-up-recurring-invoices'
  | 'how-to-send-invoice-via-email'
  | 'how-to-set-freelance-rates-2026'
  | 'how-to-write-invoice-step-by-step'
  | 'best-free-tools-freelancers-2026'
  | 'how-to-calculate-late-fees-on-invoice'
  | 'free-invoice-template-freelancers'
  | 'cash-vs-accrual-accounting-freelancers'
  | 'quote-vs-estimate-vs-invoice'
  | 'how-to-write-invoice-freelance-work'
  | 'what-happens-if-client-doesnt-pay-invoice'
  | 'proforma-invoice-vs-commercial-invoice'
  | 'how-to-create-professional-invoice'
  | 'invoice-payment-terms-explained'
  | 'how-to-invoice-international-clients'
  | 'payment-reminder-email-templates-freelancers'
  | 'how-to-ask-clients-for-upfront-deposit'
  | 'flat-fee-vs-hourly-pricing-freelancers';

// Shared style container for all hero illustrations
const wrap = (
  gradient: [string, string],
  children: JSX.Element,
  gradId: string,
) => (
  <svg
    viewBox="0 0 800 400"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    className="w-full h-full"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={gradient[0]} />
        <stop offset="100%" stopColor={gradient[1]} />
      </linearGradient>
    </defs>
    <rect width="800" height="400" fill={`url(#${gradId})`} />
    {children}
  </svg>
);

const heroes: Record<HeroKey, JSX.Element> = {
  // Recurring invoices — calendar with cyclical arrows
  'how-to-set-up-recurring-invoices': wrap(
    ['#3b82f6', '#1e3a8a'],
    <g>
      <rect x="280" y="100" width="240" height="200" rx="16" fill="#fff" opacity="0.95" />
      <rect x="280" y="100" width="240" height="48" rx="16" fill="#1e40af" />
      <circle cx="320" cy="124" r="8" fill="#fff" />
      <circle cx="480" cy="124" r="8" fill="#fff" />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3, 4].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={300 + c * 40}
            y={170 + r * 28}
            width="28"
            height="20"
            rx="3"
            fill="#e0e7ff"
          />
        )),
      )}
      <rect x={300 + 1 * 40} y={170 + 1 * 28} width="28" height="20" rx="3" fill="#3b82f6" />
      <rect x={300 + 2 * 40} y={170 + 2 * 28} width="28" height="20" rx="3" fill="#3b82f6" />
      <path
        d="M560 200 Q620 150 580 100"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M580 100 l-10 -6 l4 14 z" fill="#fbbf24" />
      <path
        d="M240 200 Q180 250 220 300"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M220 300 l10 6 l-4 -14 z" fill="#fbbf24" />
    </g>,
    'g-recurring',
  ),

  // Send invoice via email — envelope with paper plane
  'how-to-send-invoice-via-email': wrap(
    ['#6366f1', '#1e1b4b'],
    <g>
      <rect x="260" y="130" width="280" height="180" rx="12" fill="#fff" opacity="0.95" />
      <path d="M260 142 L400 240 L540 142" fill="none" stroke="#6366f1" strokeWidth="4" />
      <path d="M260 310 L360 220 M540 310 L440 220" stroke="#6366f1" strokeWidth="4" fill="none" />
      <g transform="translate(560, 180) rotate(20)">
        <path d="M0 0 L80 30 L40 40 L50 70 L30 45 L0 60 Z" fill="#fbbf24" />
        <path d="M0 0 L40 40 L30 45 Z" fill="#f59e0b" />
      </g>
      <circle cx="620" cy="120" r="6" fill="#fff" opacity="0.6" />
      <circle cx="660" cy="150" r="4" fill="#fff" opacity="0.4" />
      <circle cx="680" cy="100" r="3" fill="#fff" opacity="0.5" />
    </g>,
    'g-email',
  ),

  // Freelance rates — upward trending chart with dollar signs
  'how-to-set-freelance-rates-2026': wrap(
    ['#10b981', '#065f46'],
    <g>
      <rect x="220" y="80" width="360" height="240" rx="12" fill="#fff" opacity="0.95" />
      <line x1="260" y1="280" x2="540" y2="280" stroke="#065f46" strokeWidth="2" />
      <line x1="260" y1="280" x2="260" y2="120" stroke="#065f46" strokeWidth="2" />
      <rect x="280" y="240" width="32" height="40" fill="#d1fae5" />
      <rect x="330" y="210" width="32" height="70" fill="#6ee7b7" />
      <rect x="380" y="180" width="32" height="100" fill="#34d399" />
      <rect x="430" y="150" width="32" height="130" fill="#10b981" />
      <rect x="480" y="120" width="32" height="160" fill="#059669" />
      <path
        d="M296 240 L346 210 L396 180 L446 150 L496 120"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="496" cy="120" r="8" fill="#fbbf24" stroke="#fff" strokeWidth="2" />
      <text
        x="560"
        y="110"
        fontSize="60"
        fill="#fff"
        fontFamily="serif"
        fontWeight="bold"
        opacity="0.3"
      >
        $
      </text>
    </g>,
    'g-rates',
  ),

  // Write invoice step by step — numbered list
  'how-to-write-invoice-step-by-step': wrap(
    ['#8b5cf6', '#3b0764'],
    <g>
      <rect x="260" y="70" width="280" height="260" rx="12" fill="#fff" opacity="0.95" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx="300" cy={110 + i * 55} r="16" fill="#8b5cf6" />
          <text
            x="300"
            y={116 + i * 55}
            textAnchor="middle"
            fontSize="16"
            fill="#fff"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            {i + 1}
          </text>
          <rect x="330" y={102 + i * 55} width="180" height="6" rx="3" fill="#ddd6fe" />
          <rect x="330" y={116 + i * 55} width="140" height="4" rx="2" fill="#e9d5ff" />
        </g>
      ))}
      <path d="M308 130 L308 145 M308 185 L308 200 M308 240 L308 255" stroke="#c4b5fd" strokeWidth="2" strokeDasharray="2 3" />
    </g>,
    'g-steps',
  ),

  // Best free tools — grid of app icons
  'best-free-tools-freelancers-2026': wrap(
    ['#06b6d4', '#164e63'],
    <g>
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => {
          const colors = ['#f87171', '#fbbf24', '#4ade80', '#60a5fa', '#a78bfa', '#fb7185', '#2dd4bf', '#f472b6', '#facc15', '#818cf8', '#34d399', '#f97316'];
          return (
            <g key={`${r}-${c}`}>
              <rect
                x={270 + c * 68}
                y={100 + r * 72}
                width="56"
                height="56"
                rx="14"
                fill={colors[r * 4 + c]}
              />
              <rect
                x={284 + c * 68}
                y={120 + r * 72}
                width="28"
                height="4"
                rx="2"
                fill="#fff"
                opacity="0.85"
              />
              <rect
                x={288 + c * 68}
                y={130 + r * 72}
                width="20"
                height="4"
                rx="2"
                fill="#fff"
                opacity="0.55"
              />
            </g>
          );
        }),
      )}
      <text x="400" y="340" textAnchor="middle" fontSize="16" fill="#fff" fontFamily="sans-serif" fontWeight="600" opacity="0.85">
        15 Free Tools
      </text>
    </g>,
    'g-tools',
  ),

  // Late fees — invoice with red warning
  'how-to-calculate-late-fees-on-invoice': wrap(
    ['#ef4444', '#7f1d1d'],
    <g>
      <rect x="280" y="70" width="220" height="280" rx="8" fill="#fff" opacity="0.95" />
      <rect x="300" y="90" width="180" height="10" rx="2" fill="#fca5a5" />
      <rect x="300" y="110" width="120" height="6" rx="2" fill="#fecaca" />
      <line x1="300" y1="140" x2="480" y2="140" stroke="#fee2e2" strokeWidth="2" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="300" y={160 + i * 22} width="100" height="6" rx="2" fill="#fecaca" />
          <rect x="440" y={160 + i * 22} width="40" height="6" rx="2" fill="#fca5a5" />
        </g>
      ))}
      <line x1="300" y1="240" x2="480" y2="240" stroke="#ef4444" strokeWidth="2" />
      <rect x="300" y="260" width="180" height="60" rx="6" fill="#fee2e2" />
      <text x="390" y="290" textAnchor="middle" fontSize="14" fill="#991b1b" fontWeight="bold" fontFamily="sans-serif">
        LATE FEE
      </text>
      <text x="390" y="308" textAnchor="middle" fontSize="11" fill="#7f1d1d" fontFamily="sans-serif">
        1.5% per month
      </text>
      <g transform="translate(540, 90)">
        <polygon points="30,0 60,52 0,52" fill="#fbbf24" stroke="#fff" strokeWidth="3" />
        <text x="30" y="45" textAnchor="middle" fontSize="30" fill="#7f1d1d" fontWeight="bold" fontFamily="sans-serif">!</text>
      </g>
    </g>,
    'g-late',
  ),

  // Free invoice template — document with checkmark
  'free-invoice-template-freelancers': wrap(
    ['#14b8a6', '#134e4a'],
    <g>
      <rect x="290" y="80" width="200" height="260" rx="8" fill="#fff" opacity="0.95" />
      <rect x="310" y="100" width="160" height="8" rx="2" fill="#14b8a6" />
      <rect x="310" y="118" width="100" height="5" rx="2" fill="#5eead4" />
      <line x1="310" y1="140" x2="470" y2="140" stroke="#ccfbf1" strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="310" y={160 + i * 22} width="80" height="5" rx="2" fill="#99f6e4" />
          <rect x="420" y={160 + i * 22} width="50" height="5" rx="2" fill="#5eead4" />
        </g>
      ))}
      <line x1="310" y1="260" x2="470" y2="260" stroke="#14b8a6" strokeWidth="2" />
      <rect x="310" y="280" width="160" height="40" rx="6" fill="#ccfbf1" />
      <text x="390" y="306" textAnchor="middle" fontSize="12" fill="#0f766e" fontWeight="bold" fontFamily="sans-serif">
        TOTAL DUE
      </text>
      <g transform="translate(500, 90)">
        <circle cx="30" cy="30" r="30" fill="#4ade80" />
        <path d="M18 30 L26 38 L42 22" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="540" y="360" textAnchor="middle" fontSize="14" fill="#fff" fontFamily="sans-serif" fontWeight="600" opacity="0.9">
        FREE
      </text>
    </g>,
    'g-template',
  ),

  // Cash vs accrual — two ledger books side by side
  'cash-vs-accrual-accounting-freelancers': wrap(
    ['#f59e0b', '#78350f'],
    <g>
      <rect x="180" y="100" width="180" height="220" rx="10" fill="#fff" opacity="0.95" />
      <rect x="180" y="100" width="180" height="40" rx="10" fill="#f59e0b" />
      <text x="270" y="127" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold" fontFamily="sans-serif">
        CASH
      </text>
      {[0, 1, 2, 3].map((i) => (
        <g key={`c-${i}`}>
          <rect x="200" y={160 + i * 30} width="100" height="6" rx="2" fill="#fde68a" />
          <rect x="320" y={160 + i * 30} width="24" height="6" rx="2" fill="#f59e0b" />
        </g>
      ))}
      <rect x="440" y="100" width="180" height="220" rx="10" fill="#fff" opacity="0.95" />
      <rect x="440" y="100" width="180" height="40" rx="10" fill="#1e40af" />
      <text x="530" y="127" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold" fontFamily="sans-serif">
        ACCRUAL
      </text>
      {[0, 1, 2, 3].map((i) => (
        <g key={`a-${i}`}>
          <rect x="460" y={160 + i * 30} width="100" height="6" rx="2" fill="#bfdbfe" />
          <rect x="580" y={160 + i * 30} width="24" height="6" rx="2" fill="#3b82f6" />
        </g>
      ))}
      <text x="395" y="220" textAnchor="middle" fontSize="28" fill="#fff" fontWeight="bold" fontFamily="sans-serif">
        vs
      </text>
    </g>,
    'g-cash-accrual',
  ),

  // Quote vs estimate vs invoice — three stacked documents
  'quote-vs-estimate-vs-invoice': wrap(
    ['#ec4899', '#831843'],
    <g>
      <rect x="220" y="100" width="180" height="220" rx="8" fill="#fbcfe8" transform="rotate(-8, 310, 210)" />
      <rect x="240" y="110" width="180" height="220" rx="8" fill="#f9a8d4" transform="rotate(-3, 330, 220)" />
      <rect x="320" y="100" width="180" height="220" rx="8" fill="#fff" opacity="0.98" />
      <rect x="340" y="120" width="140" height="10" rx="2" fill="#ec4899" />
      <rect x="340" y="140" width="90" height="5" rx="2" fill="#f9a8d4" />
      <line x1="340" y1="170" x2="480" y2="170" stroke="#fce7f3" strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="340" y={190 + i * 18} width="80" height="5" rx="2" fill="#fbcfe8" />
          <rect x="440" y={190 + i * 18} width="40" height="5" rx="2" fill="#f472b6" />
        </g>
      ))}
      <rect x="340" y="280" width="140" height="20" rx="4" fill="#ec4899" />
      <g fontFamily="sans-serif" fontWeight="bold" fontSize="11" fill="#fff">
        <text x="240" y="90" textAnchor="middle">QUOTE</text>
        <text x="330" y="105" textAnchor="middle">ESTIMATE</text>
        <text x="410" y="115" textAnchor="middle">INVOICE</text>
      </g>
    </g>,
    'g-quote-estimate',
  ),

  // Freelance invoice — laptop with invoice on screen
  'how-to-write-invoice-freelance-work': wrap(
    ['#0ea5e9', '#0c4a6e'],
    <g>
      <rect x="200" y="100" width="400" height="220" rx="12" fill="#1e293b" />
      <rect x="215" y="115" width="370" height="195" rx="4" fill="#fff" />
      <rect x="240" y="135" width="160" height="8" rx="2" fill="#0ea5e9" />
      <rect x="240" y="150" width="100" height="5" rx="2" fill="#7dd3fc" />
      <line x1="240" y1="170" x2="560" y2="170" stroke="#e0f2fe" strokeWidth="1.5" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="240" y={190 + i * 20} width="180" height="5" rx="2" fill="#bae6fd" />
          <rect x="500" y={190 + i * 20} width="60" height="5" rx="2" fill="#0ea5e9" />
        </g>
      ))}
      <rect x="240" y="270" width="320" height="26" rx="4" fill="#e0f2fe" />
      <rect x="240" y="270" width="200" height="26" rx="4" fill="#0ea5e9" />
      <text x="340" y="287" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff" fontFamily="sans-serif">
        PAID
      </text>
      <rect x="170" y="320" width="460" height="14" rx="3" fill="#334155" />
      <rect x="360" y="320" width="80" height="6" fill="#1e293b" />
    </g>,
    'g-freelance-invoice',
  ),

  // Unpaid invoice — clock with money symbol
  'what-happens-if-client-doesnt-pay-invoice': wrap(
    ['#dc2626', '#450a0a'],
    <g>
      <rect x="230" y="90" width="200" height="260" rx="8" fill="#fff" opacity="0.95" />
      <rect x="250" y="110" width="160" height="8" rx="2" fill="#dc2626" />
      <rect x="250" y="128" width="100" height="5" rx="2" fill="#fca5a5" />
      <rect x="250" y="170" width="160" height="8" rx="2" fill="#fee2e2" />
      <rect x="250" y="190" width="160" height="8" rx="2" fill="#fee2e2" />
      <rect x="250" y="210" width="160" height="8" rx="2" fill="#fee2e2" />
      <g transform="translate(240, 260)">
        <rect width="180" height="50" rx="6" fill="#fecaca" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 3" />
        <text x="90" y="32" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#991b1b" fontFamily="sans-serif">
          UNPAID
        </text>
      </g>
      <g transform="translate(480, 160)">
        <circle cx="60" cy="60" r="60" fill="#fff" opacity="0.95" />
        <circle cx="60" cy="60" r="52" fill="none" stroke="#dc2626" strokeWidth="4" />
        <line x1="60" y1="60" x2="60" y2="30" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
        <line x1="60" y1="60" x2="85" y2="75" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
        <circle cx="60" cy="60" r="4" fill="#dc2626" />
        {[0, 3, 6, 9].map((i) => {
          const angle = (i / 12) * 2 * Math.PI - Math.PI / 2;
          const x1 = 60 + Math.cos(angle) * 44;
          const y1 = 60 + Math.sin(angle) * 44;
          const x2 = 60 + Math.cos(angle) * 50;
          const y2 = 60 + Math.sin(angle) * 50;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />;
        })}
      </g>
    </g>,
    'g-unpaid',
  ),

  // Proforma vs commercial — two documents labeled
  'proforma-invoice-vs-commercial-invoice': wrap(
    ['#7c3aed', '#2e1065'],
    <g>
      <rect x="160" y="100" width="200" height="240" rx="8" fill="#fff" opacity="0.95" transform="rotate(-4, 260, 220)" />
      <g transform="rotate(-4, 260, 220)">
        <rect x="180" y="120" width="160" height="28" rx="4" fill="#a78bfa" />
        <text x="260" y="140" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff" fontFamily="sans-serif">
          PROFORMA
        </text>
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect x="180" y={170 + i * 22} width="100" height="5" rx="2" fill="#ddd6fe" />
            <rect x="300" y={170 + i * 22} width="40" height="5" rx="2" fill="#a78bfa" />
          </g>
        ))}
        <rect x="180" y="290" width="160" height="30" rx="4" fill="#f3e8ff" />
        <text x="260" y="309" textAnchor="middle" fontSize="10" fontWeight="600" fill="#6d28d9" fontFamily="sans-serif">
          EST. DEPOSIT
        </text>
      </g>
      <rect x="440" y="100" width="200" height="240" rx="8" fill="#fff" opacity="0.95" transform="rotate(4, 540, 220)" />
      <g transform="rotate(4, 540, 220)">
        <rect x="460" y="120" width="160" height="28" rx="4" fill="#7c3aed" />
        <text x="540" y="140" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff" fontFamily="sans-serif">
          COMMERCIAL
        </text>
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect x="460" y={170 + i * 22} width="100" height="5" rx="2" fill="#ddd6fe" />
            <rect x="580" y={170 + i * 22} width="40" height="5" rx="2" fill="#7c3aed" />
          </g>
        ))}
        <rect x="460" y="290" width="160" height="30" rx="4" fill="#7c3aed" />
        <text x="540" y="309" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff" fontFamily="sans-serif">
          FINAL AMOUNT
        </text>
      </g>
    </g>,
    'g-proforma',
  ),

  // Create professional invoice — polished invoice with gold accents
  'how-to-create-professional-invoice': wrap(
    ['#1e40af', '#0c0a2e'],
    <g>
      <rect x="280" y="60" width="240" height="300" rx="10" fill="#fff" opacity="0.98" />
      <rect x="280" y="60" width="240" height="60" rx="10" fill="#1e40af" />
      <rect x="280" y="110" width="240" height="10" fill="#fbbf24" />
      <text x="300" y="95" fontSize="22" fontWeight="bold" fill="#fff" fontFamily="serif">
        INVOICE
      </text>
      <rect x="440" y="75" width="60" height="30" rx="4" fill="#fbbf24" />
      <text x="470" y="95" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e3a8a" fontFamily="sans-serif">
        #001
      </text>
      <rect x="300" y="145" width="120" height="6" rx="2" fill="#1e40af" />
      <rect x="300" y="160" width="80" height="4" rx="2" fill="#93c5fd" />
      <rect x="300" y="170" width="90" height="4" rx="2" fill="#93c5fd" />
      <rect x="430" y="145" width="80" height="6" rx="2" fill="#1e40af" />
      <rect x="430" y="160" width="60" height="4" rx="2" fill="#93c5fd" />
      <line x1="300" y1="200" x2="500" y2="200" stroke="#1e40af" strokeWidth="1" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="300" y={220 + i * 22} width="120" height="5" rx="2" fill="#dbeafe" />
          <rect x="450" y={220 + i * 22} width="50" height="5" rx="2" fill="#1e40af" />
        </g>
      ))}
      <line x1="300" y1="300" x2="500" y2="300" stroke="#fbbf24" strokeWidth="2" />
      <rect x="380" y="315" width="120" height="30" rx="4" fill="#1e40af" />
      <text x="440" y="335" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fbbf24" fontFamily="sans-serif">
        TOTAL
      </text>
    </g>,
    'g-professional',
  ),

  // Payment terms — calendar with Net 30 badge
  'invoice-payment-terms-explained': wrap(
    ['#0891b2', '#0c4a6e'],
    <g>
      <rect x="200" y="100" width="260" height="220" rx="12" fill="#fff" opacity="0.95" />
      <rect x="200" y="100" width="260" height="44" rx="12" fill="#0891b2" />
      <circle cx="230" cy="122" r="6" fill="#fff" />
      <circle cx="430" cy="122" r="6" fill="#fff" />
      <text x="330" y="130" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff" fontFamily="sans-serif">
        APRIL 2026
      </text>
      {[0, 1, 2, 3, 4].map((r) =>
        [0, 1, 2, 3, 4, 5, 6].map((c) => {
          const day = r * 7 + c + 1;
          if (day > 30) return null;
          const isHighlight = day === 15 || day === 30;
          return (
            <g key={`${r}-${c}`}>
              <rect
                x={220 + c * 32}
                y={160 + r * 28}
                width="26"
                height="22"
                rx="3"
                fill={isHighlight ? '#0891b2' : '#e0f2fe'}
              />
              <text
                x={233 + c * 32}
                y={175 + r * 28}
                textAnchor="middle"
                fontSize="9"
                fill={isHighlight ? '#fff' : '#0c4a6e'}
                fontFamily="sans-serif"
                fontWeight={isHighlight ? 'bold' : 'normal'}
              >
                {day}
              </text>
            </g>
          );
        }),
      )}
      <g transform="translate(490, 160)">
        <rect width="120" height="60" rx="10" fill="#fbbf24" />
        <text x="60" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#78350f" fontFamily="sans-serif">
          NET 30
        </text>
        <text x="60" y="48" textAnchor="middle" fontSize="10" fill="#78350f" fontFamily="sans-serif">
          Due in 30 days
        </text>
      </g>
      <g transform="translate(490, 240)">
        <rect width="120" height="60" rx="10" fill="#4ade80" />
        <text x="60" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#14532d" fontFamily="sans-serif">
          NET 15
        </text>
        <text x="60" y="48" textAnchor="middle" fontSize="10" fill="#14532d" fontFamily="sans-serif">
          Due in 15 days
        </text>
      </g>
    </g>,
    'g-terms',
  ),

  // International clients — globe with currency tags and a passing invoice envelope
  'how-to-invoice-international-clients': wrap(
    ['#0ea5e9', '#0c4a6e'],
    <g>
      <circle cx="280" cy="200" r="110" fill="#fff" opacity="0.95" />
      <circle cx="280" cy="200" r="110" fill="none" stroke="#0c4a6e" strokeWidth="3" />
      <ellipse cx="280" cy="200" rx="110" ry="40" fill="none" stroke="#0c4a6e" strokeWidth="1.5" opacity="0.5" />
      <ellipse cx="280" cy="200" rx="110" ry="80" fill="none" stroke="#0c4a6e" strokeWidth="1.5" opacity="0.5" />
      <ellipse cx="280" cy="200" rx="40" ry="110" fill="none" stroke="#0c4a6e" strokeWidth="1.5" opacity="0.5" />
      <line x1="280" y1="90" x2="280" y2="310" stroke="#0c4a6e" strokeWidth="1.5" opacity="0.5" />
      <path d="M235 170 Q255 160 275 175 Q290 185 275 200 Q255 210 240 195 Z" fill="#38bdf8" />
      <path d="M295 215 Q320 210 330 230 Q325 250 305 245 Q290 240 295 215 Z" fill="#38bdf8" />
      <path d="M220 225 Q240 220 245 240 Q235 255 218 245 Z" fill="#38bdf8" />
      <g transform="translate(460, 110)">
        <rect width="100" height="56" rx="10" fill="#fbbf24" />
        <text x="50" y="25" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#78350f" fontFamily="sans-serif">
          USD
        </text>
        <text x="50" y="45" textAnchor="middle" fontSize="11" fill="#78350f" fontFamily="sans-serif">
          $ 2,400
        </text>
      </g>
      <g transform="translate(580, 170)">
        <rect width="100" height="56" rx="10" fill="#4ade80" />
        <text x="50" y="25" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#14532d" fontFamily="sans-serif">
          EUR
        </text>
        <text x="50" y="45" textAnchor="middle" fontSize="11" fill="#14532d" fontFamily="sans-serif">
          € 2,208
        </text>
      </g>
      <g transform="translate(460, 230)">
        <rect width="100" height="56" rx="10" fill="#c084fc" />
        <text x="50" y="25" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#3b0764" fontFamily="sans-serif">
          GBP
        </text>
        <text x="50" y="45" textAnchor="middle" fontSize="11" fill="#3b0764" fontFamily="sans-serif">
          £ 1,896
        </text>
      </g>
      <path d="M380 170 Q440 90 560 110" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="6 6" opacity="0.8" />
      <g transform="translate(410, 290)">
        <rect width="60" height="40" rx="4" fill="#fff" stroke="#0c4a6e" strokeWidth="2" />
        <path d="M0 0 L30 22 L60 0" fill="none" stroke="#0c4a6e" strokeWidth="2" />
      </g>
    </g>,
    'g-intl',
  ),

  // Payment reminders — envelope with bell + escalating reminder badges
  'payment-reminder-email-templates-freelancers': wrap(
    ['#6366f1', '#831843'],
    <g>
      <rect x="220" y="120" width="280" height="180" rx="10" fill="#fff" opacity="0.97" />
      <path d="M220 132 L360 226 L500 132" fill="none" stroke="#6366f1" strokeWidth="3" />
      <path d="M220 300 L320 210 M500 300 L400 210" stroke="#6366f1" strokeWidth="3" fill="none" />
      <rect x="250" y="155" width="100" height="6" rx="2" fill="#c7d2fe" />
      <rect x="250" y="170" width="60" height="4" rx="2" fill="#e0e7ff" />
      <g transform="translate(490, 90)">
        <path d="M30 0 C 16 0 6 12 6 28 L6 50 L0 60 L60 60 L54 50 L54 28 C54 12 44 0 30 0 Z" fill="#fbbf24" stroke="#fff" strokeWidth="2" />
        <circle cx="30" cy="68" r="6" fill="#fbbf24" stroke="#fff" strokeWidth="2" />
        <circle cx="50" cy="6" r="5" fill="#ef4444" />
      </g>
      <g fontFamily="sans-serif" fontWeight="bold" fontSize="11" fill="#fff">
        <g transform="translate(560, 150)">
          <rect width="86" height="28" rx="14" fill="#10b981" />
          <text x="43" y="19" textAnchor="middle">T-3 nudge</text>
        </g>
        <g transform="translate(560, 192)">
          <rect width="86" height="28" rx="14" fill="#f59e0b" />
          <text x="43" y="19" textAnchor="middle">T+7 follow</text>
        </g>
        <g transform="translate(560, 234)">
          <rect width="86" height="28" rx="14" fill="#dc2626" />
          <text x="43" y="19" textAnchor="middle">T+30 final</text>
        </g>
      </g>
      <path d="M510 164 L548 164" stroke="#fff" strokeWidth="2" strokeDasharray="4 3" opacity="0.7" />
      <path d="M510 206 L548 206" stroke="#fff" strokeWidth="2" strokeDasharray="4 3" opacity="0.7" />
      <path d="M510 248 L548 248" stroke="#fff" strokeWidth="2" strokeDasharray="4 3" opacity="0.7" />
      <circle cx="160" cy="180" r="4" fill="#fff" opacity="0.5" />
      <circle cx="180" cy="240" r="3" fill="#fff" opacity="0.4" />
      <circle cx="140" cy="280" r="5" fill="#fff" opacity="0.3" />
    </g>,
    'g-reminders',
  ),

  // Upfront deposit — signed contract with 50% deposit badge + cash arrow before kickoff
  'how-to-ask-clients-for-upfront-deposit': wrap(
    ['#0ea5e9', '#0f172a'],
    <g>
      <rect x="180" y="110" width="220" height="200" rx="12" fill="#fff" opacity="0.97" />
      <rect x="200" y="132" width="140" height="8" rx="2" fill="#0f172a" />
      <rect x="200" y="150" width="100" height="5" rx="2" fill="#94a3b8" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x="200"
          y={175 + i * 14}
          width={i === 3 ? 110 : 180}
          height="5"
          rx="2"
          fill="#cbd5e1"
        />
      ))}
      <path
        d="M205 252 Q230 238 250 252 T295 252 T340 252"
        stroke="#0ea5e9"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <text x="205" y="290" fontSize="11" fontFamily="sans-serif" fill="#475569">
        Signed
      </text>
      <g transform="translate(440, 130)">
        <rect width="160" height="100" rx="14" fill="#10b981" />
        <text
          x="80"
          y="46"
          textAnchor="middle"
          fontSize="32"
          fontWeight="bold"
          fontFamily="sans-serif"
          fill="#fff"
        >
          50%
        </text>
        <text
          x="80"
          y="74"
          textAnchor="middle"
          fontSize="13"
          fontFamily="sans-serif"
          fill="#ecfdf5"
        >
          DEPOSIT
        </text>
      </g>
      <path
        d="M410 200 Q470 270 540 240"
        stroke="#fff"
        strokeWidth="3"
        fill="none"
        strokeDasharray="6 5"
        opacity="0.8"
      />
      <polygon points="538,232 552,238 540,250" fill="#fff" opacity="0.85" />
      <g transform="translate(470, 270)">
        <circle r="28" fill="#fbbf24" />
        <text
          textAnchor="middle"
          y="6"
          fontSize="22"
          fontWeight="bold"
          fontFamily="sans-serif"
          fill="#78350f"
        >
          $
        </text>
      </g>
      <text
        x="600"
        y="320"
        textAnchor="end"
        fontSize="13"
        fontFamily="sans-serif"
        fill="#fff"
        opacity="0.85"
      >
        Paid before kickoff
      </text>
    </g>,
    'g-deposit',
  ),
  // Flat-fee vs hourly — clock card vs fixed-fee package card with VS in the middle
  'flat-fee-vs-hourly-pricing-freelancers': wrap(
    ['#22d3ee', '#7c3aed'],
    <g>
      <rect x="160" y="100" width="200" height="220" rx="14" fill="#fff" opacity="0.97" />
      <rect x="160" y="100" width="200" height="44" rx="14" fill="#0e7490" />
      <text
        x="260"
        y="128"
        textAnchor="middle"
        fontSize="15"
        fontWeight="bold"
        fill="#fff"
        fontFamily="sans-serif"
      >
        HOURLY
      </text>
      <g transform="translate(220, 168)">
        <circle cx="40" cy="40" r="36" fill="#fff" stroke="#0e7490" strokeWidth="3" />
        <line x1="40" y1="40" x2="40" y2="18" stroke="#0e7490" strokeWidth="3" strokeLinecap="round" />
        <line x1="40" y1="40" x2="58" y2="50" stroke="#0e7490" strokeWidth="3" strokeLinecap="round" />
        <circle cx="40" cy="40" r="3" fill="#0e7490" />
        {[0, 3, 6, 9].map((i) => {
          const angle = (i / 12) * 2 * Math.PI - Math.PI / 2;
          const x1 = 40 + Math.cos(angle) * 28;
          const y1 = 40 + Math.sin(angle) * 28;
          const x2 = 40 + Math.cos(angle) * 33;
          const y2 = 40 + Math.sin(angle) * 33;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#0e7490"
              strokeWidth="2"
              strokeLinecap="round"
            />
          );
        })}
      </g>
      <rect x="180" y="266" width="160" height="34" rx="6" fill="#cffafe" />
      <text
        x="260"
        y="288"
        textAnchor="middle"
        fontSize="13"
        fontWeight="bold"
        fill="#0e7490"
        fontFamily="sans-serif"
      >
        $/hour
      </text>
      <rect x="440" y="100" width="200" height="220" rx="14" fill="#fff" opacity="0.97" />
      <rect x="440" y="100" width="200" height="44" rx="14" fill="#7c3aed" />
      <text
        x="540"
        y="128"
        textAnchor="middle"
        fontSize="15"
        fontWeight="bold"
        fill="#fff"
        fontFamily="sans-serif"
      >
        FLAT FEE
      </text>
      <g transform="translate(490, 170)">
        <rect width="100" height="76" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="3" />
        <path d="M0 22 L100 22" stroke="#7c3aed" strokeWidth="3" />
        <path d="M50 0 L50 76" stroke="#7c3aed" strokeWidth="3" strokeDasharray="4 3" />
        <circle cx="50" cy="22" r="10" fill="#fbbf24" stroke="#7c3aed" strokeWidth="2" />
      </g>
      <rect x="460" y="266" width="160" height="34" rx="6" fill="#ede9fe" />
      <text
        x="540"
        y="288"
        textAnchor="middle"
        fontSize="13"
        fontWeight="bold"
        fill="#7c3aed"
        fontFamily="sans-serif"
      >
        $/project
      </text>
      <g transform="translate(370, 195)">
        <circle r="30" fill="#fbbf24" stroke="#fff" strokeWidth="3" />
        <text
          textAnchor="middle"
          y="6"
          fontSize="22"
          fontWeight="bold"
          fontFamily="sans-serif"
          fill="#78350f"
        >
          VS
        </text>
      </g>
    </g>,
    'g-flat-vs-hourly',
  ),
};

// Fallback SVG used when a slug doesn't match a known hero.
const fallback: JSX.Element = wrap(
  ['#64748b', '#1e293b'],
  <g>
    <rect x="300" y="120" width="200" height="160" rx="10" fill="#fff" opacity="0.95" />
    <rect x="320" y="140" width="160" height="8" rx="2" fill="#64748b" />
    <rect x="320" y="158" width="100" height="5" rx="2" fill="#cbd5e1" />
    {[0, 1, 2].map((i) => (
      <rect
        key={i}
        x="320"
        y={185 + i * 18}
        width="160"
        height="5"
        rx="2"
        fill="#e2e8f0"
      />
    ))}
    <rect x="320" y="250" width="80" height="16" rx="3" fill="#64748b" />
  </g>,
  'g-fallback',
);

interface HeroSvgProps {
  slug: string;
  className?: string;
}

export default function HeroSvg({ slug, className }: HeroSvgProps) {
  const svg = (heroes as Record<string, JSX.Element>)[slug] ?? fallback;

  return (
    <div
      className={
        className ??
        'relative w-full h-full overflow-hidden'
      }
    >
      {svg}
    </div>
  );
}
