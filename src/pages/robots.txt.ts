export function GET() {
  const site = (import.meta.env.SITE || 'https://kpassword.vercel.app').replace(/\/$/, '');
  const base = import.meta.env.BASE_URL || '/';
  const root = `${site}${base}`.replace(/\/$/, '');
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${root}/sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
}
