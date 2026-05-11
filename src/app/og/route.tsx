import { ImageResponse } from 'next/og';

/**
 * Dynamic OG / Twitter card generator.
 *
 * Renders a 1200×630 PNG at the edge from query params:
 *   /og?kind=home                              — sitewide brand card
 *   /og?kind=blog&title=...                    — blog post card with title
 *   /og?kind=template&title=...                — industry template card
 *
 * The same URL is referenced by:
 *   - <meta property="og:image">  (Open Graph)
 *   - <meta name="twitter:image"> (Twitter Card)
 *   - schema.org Article `image` field
 *
 * Vercel edge-caches the rendered PNG after the first hit, so subsequent
 * requests are free. This means zero static image files in /public/.
 */

export const runtime = 'edge';

const WIDTH = 1200;
const HEIGHT = 630;

type Kind = 'home' | 'blog' | 'template' | 'default';

function parseKind(value: string | null): Kind {
  if (value === 'blog' || value === 'template' || value === 'home') return value;
  return 'default';
}

function headline(kind: Kind, title: string | null): { eyebrow: string; main: string; sub: string } {
  if (kind === 'blog' && title) {
    return {
      eyebrow: 'BuildWithRiz · Blog',
      main: title,
      sub: 'Free invoice generator & guides for freelancers',
    };
  }
  if (kind === 'template' && title) {
    return {
      eyebrow: 'BuildWithRiz · Invoice Template',
      main: title,
      sub: 'Free, customizable, no signup required',
    };
  }
  return {
    eyebrow: 'BuildWithRiz',
    main: 'Free Invoice Generator',
    sub: 'No signup. Download as PDF. 100% in your browser.',
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const kind = parseKind(searchParams.get('kind'));
  const rawTitle = searchParams.get('title');
  const title = rawTitle ? rawTitle.slice(0, 140) : null;
  const { eyebrow, main, sub } = headline(kind, title);

  // Font size scales down for longer headlines so they fit the card.
  const mainSize = main.length > 80 ? 52 : main.length > 50 ? 64 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background:
            'linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #3b82f6 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top row: brand mark + eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#2563eb',
              fontSize: 40,
              fontWeight: 800,
              boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
            }}
          >
            B
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: '#bfdbfe',
              letterSpacing: 0.5,
            }}
          >
            {eyebrow}
          </div>
        </div>

        {/* Headline block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: mainSize,
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#ffffff',
              maxWidth: 1040,
            }}
          >
            {main}
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: '#bfdbfe',
              maxWidth: 980,
            }}
          >
            {sub}
          </div>
        </div>

        {/* Footer chips */}
        <div style={{ display: 'flex', gap: 16, fontSize: 22, fontWeight: 600 }}>
          {['100% Free', 'No Signup', 'Privacy-First'].map((chip) => (
            <div
              key={chip}
              style={{
                padding: '12px 24px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.28)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      headers: {
        // Cache for 7 days at the edge; stale-while-revalidate for a day.
        'cache-control':
          'public, max-age=0, s-maxage=604800, stale-while-revalidate=86400',
      },
    },
  );
}
