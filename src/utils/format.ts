import type { Locale } from '@/data/i18n';
import { content, locales } from '@/data/i18n';

export function formatDate(date?: string | null, locale: Locale = 'pt'): string {
  if (!date) return content[locale].common.dateMissing;

  return new Intl.DateTimeFormat(locales[locale].htmlLang, {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(new Date(date));
}

export function formatBytes(bytes?: number | null, locale: Locale = 'pt'): string {
  if (!bytes) return content[locale].common.sizeMissing;
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(value >= 10 || unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}
