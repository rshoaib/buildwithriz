const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
  for (const line of lines) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const i = t.indexOf('=');
    if (i === -1) continue;
    const k = t.slice(0, i).trim();
    const v = t.slice(i + 1).trim();
    if (!process.env[k]) process.env[k] = v;
  }
}

const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
  const { data, error } = await sb
    .from('blog_posts')
    .select('title, date')
    .order('date', { ascending: false });

  if (error) {
    fs.writeFileSync('tmp-blog-output.txt', 'ERROR: ' + error.message);
    return;
  }

  const lines = data.map(a => a.date + ' | ' + a.title);
  fs.writeFileSync('tmp-blog-output.txt', lines.join('\n'));
}

main();
