import { useEffect, useLayoutEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

<% if (source === 'prismic') { -%>
/**
 * Prismic preview hook
 */
export function usePreview(staticData: any): any {
  const [data, setData] = useState(staticData);

  useEffect(() => {
    async function getPreview() {
      if (window.__PRISMIC_PREVIEW_DATA__) {
        const { mergePrismicPreviewData } = await import(
          /* webpackChunkName: "gatsby-source-prismic" */ 'gatsby-source-prismic'
        );

        setData(
          mergePrismicPreviewData({
            staticData,
            previewData: window.__PRISMIC_PREVIEW_DATA__
          })
        );
      }
    }
    getPreview();
  }, [staticData]);
  return data;
}

<% } -%>
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
