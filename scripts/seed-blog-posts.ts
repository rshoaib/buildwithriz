import { createClient } from '@supabase/supabase-js';
import { articles } from '../src/data/articles';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing SUPABASE env vars. Make sure to run with --env-file=.env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log('Inserting blog posts into Supabase...');

  for (const article of articles) {
    const post = {
      slug: article.slug,
      title: article.title,
      description: article.description,
      date: article.date,
      readTime: article.readTime,
      keywords: article.keywords,
      heroImage: article.heroImage,
      content: article.content,
    };

    const { data, error } = await supabase
      .from('blog_posts')
      .upsert(post, { onConflict: 'slug' })
      .select();

    if (error) {
      console.error(`Error inserting article ${article.slug}:`, error.message);
    } else {
      console.log(`✅ Article inserted/updated successfully: ${article.slug}`);
    }
  }
}

main();
