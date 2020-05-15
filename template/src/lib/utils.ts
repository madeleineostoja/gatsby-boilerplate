import url from 'url';

/**
 * Lock body scrolling overflow
 * @param state Whether to lock or not
 */
export function lockScroll(state: boolean) {
  if (typeof document === 'undefined') {
    return;
  }

  document.documentElement.style.overflow = state ? 'hidden' : '';
}

/**
 * Resole relative URLs against a source
 * @param link URL to resolve
 * @param source Source URL to resolve against
 */
export function resolveUrl(link: string, source: string) {
  if (!link) {
    return source;
  }

  return !/^https?:\/\//i.test(link) ? url.resolve(source, link) : link;
}
