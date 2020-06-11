import { useLayoutEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

/**
 * Patched useMediaQuery for SSR
 * Until https://github.com/contra/react-responsive/issues/162 resolved
 * @param {string} query
 * @param {boolean} fallback
 * @param {function} callback
 */
export function useBreakpoint(
  query: string,
  fallback = true,
  callback?: () => any
) {
  const [browserFlushed, setBrowserFlushed] = useState(false);
  const matched = useMediaQuery({ query }, undefined, callback);
  useLayoutEffect(() => setBrowserFlushed(true), []);

  if (typeof window !== 'undefined' && browserFlushed) {
    return matched;
  }
  return fallback;
}
