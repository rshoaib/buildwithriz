const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing SUPABASE env vars.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const { data, error } = await supabase
    .from('blog_posts')
    .update({ date: '2026-03-25' })
    .eq('slug', 'how-to-calculate-late-fees-on-invoice');

  if (error) {
    console.error('Error updating article:', error.message);
  } else {
    console.log('✅ Date updated to 2026-03-25!');
  }
}

main();
