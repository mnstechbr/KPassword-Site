import { locales, pageKeys, routes, type Locale } from '@/data/i18n';

const allPages = Object.keys(locales).flatMap((locale) => {
  const typedLocale = locale as Locale;
  return pageKeys.map((page) => routes[typedLocale][page]);
});

export function GET() {
  const site = (import.meta.env.SITE || 'https://kpassword.vercel.app').replace(/\/$/, '');
  const base = import.meta.env.BASE_URL || '/';
  const root = `${site}${base}`.replace(/\/$/, '');
  const urls = allPages
    .map((page) => {
      const clean = page === '/' ? '' : page.replace(/^\//, '');
      return `  <url><loc>${clean ? `${root}/${clean}` : root}</loc></url>`;
    })
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
