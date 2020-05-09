import url from 'url';
<% if (source === 'prismic') { -%>
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

// Custom parse date strings for Safari compat
export function dayjsPrismic(dateString: string) {
  return dayjs(dateString, 'YYYY/MM/DD H:mm:ss');
}
<% } -%>

// Lock body scrolling
export function lockScroll(state: boolean) {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.style.overflow = state ? 'hidden' : '';
}

// Resolve relative URLs
export function resolveUrl(link: string, source: string) {
  if (!link) {
    return source;
  }

  return !/^https?:\/\//i.test(link) ? url.resolve(source, link) : link;
}
