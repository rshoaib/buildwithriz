const fs = require('fs');
const path = require('path');

// Parse .env.local manually
const envPath = path.resolve(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[key]) process.env[key] = val;
  }
}

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkFrequency() {
  const { data: articles, error } = await supabase
    .from('blog_posts')
    .select('title, date')
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching articles:', error);
    process.exit(1);
  }

  const todayStr = new Date().toISOString().split('T')[0];
  
  // Calculate start and end of current week (Mon-Sun)
  // Assuming today is Saturday 2026-03-14 (as per metadata context)
  const todayDate = new Date();
  const dayOfWeek = todayDate.getDay(); // 0 (Sun) to 6 (Sat)
  const diffToMon = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  
  const mondayObj = new Date(todayDate);
  mondayObj.setDate(todayDate.getDate() + diffToMon);
  const mondayStr = mondayObj.toISOString().split('T')[0];

  const sundayObj = new Date(mondayObj);
  sundayObj.setDate(mondayObj.getDate() + 6);
  const sundayStr = sundayObj.toISOString().split('T')[0];

  const publishedToday = articles.filter(a => a.date === todayStr);
  const publishedThisWeek = articles.filter(a => a.date >= mondayStr && a.date <= sundayStr);

  const total = articles.length;
  const lastDate = articles.length > 0 ? articles[0].date : 'N/A';
  const lastTitle = articles.length > 0 ? articles[0].title : 'N/A';

  console.log('╔══════════════════════════════════════════════════════╗');
  console.log('║  📊 Content Dashboard — buildwithriz.com             ║');
  console.log('╠══════════════════════════════════════════════════════╣');
  console.log(`║  📦 Total Articles       │ ${total.toString().padEnd(24)} ║`);
  console.log(`║  📅 Last Published       │ ${lastDate} — ${(lastTitle.substring(0,25) + (lastTitle.length > 25 ? '...' : '')).padEnd(27, ' ')}║`);
  console.log('╠──────────────────────────┼──────────────────────────╣');
  console.log(`║  ✍️ Published Today       │ ${publishedToday.length} of 1 ${publishedToday.length >= 1 ? '⬛' : '⬜'}                 ║`);
  console.log(`║  📆 Published This Week   │ ${publishedThisWeek.length} of 3 ${'⬛'.repeat(Math.min(3, publishedThisWeek.length))}${'⬜'.repeat(Math.max(0, 3 - publishedThisWeek.length))}               ║`);
  console.log('╠──────────────────────────┼──────────────────────────╣');
  console.log(`║  🟢 Today Slots Left      │ ${Math.max(0, 1 - publishedToday.length)}                        ║`);
  console.log(`║  🟢 Week Slots Left       │ ${Math.max(0, 3 - publishedThisWeek.length)}                        ║`);
  console.log('╠══════════════════════════════════════════════════════╣');
  console.log("║  This week's articles:                              ║");
  
  if (publishedThisWeek.length === 0) {
    console.log('║  • None                                              ║');
  } else {
    publishedThisWeek.forEach(a => {
      const line = `║  • ${a.date} — ${a.title}`;
      console.log(line.length > 51 ? line.substring(0, 51) + '... ║' : line.padEnd(54, ' ') + ' ║');
    });
  }
  
  console.log('╚══════════════════════════════════════════════════════╝');

  if (publishedToday.length >= 1) {
    console.log('\\n⚠️ CAUTION: Already published today — try another site');
  } else if (publishedThisWeek.length >= 3) {
    console.log('\\n🛑 STOP: Weekly limit reached — switch site');
  } else {
    console.log('\\n✅ GO');
  }
}

checkFrequency();
