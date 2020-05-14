import { css, Global } from '@emotion/core';
import { PageProps } from 'gatsby';
import { LogoJsonLd } from 'gatsby-plugin-next-seo';
import { shimmie } from 'pollen-css/utils';
import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { msGridRows } from 'satchel-css';
import globalStyles from './styles';
<% if (components.includes('toasts')) { -%>
import { ToastProvider } from 'react-toast-notifications';
import { Toast, ToastContainer } from '../../components/Toast';
<% } -%>

function customPolyfills() {
  useEffect(() => {
    shimmie();
  }, []);

  if (!cssVars.test) {
    document.body.style.visibility = 'hidden';
    import(
      /* webpackChunkName: "css-vars-ponyfill" */ 'css-vars-ponyfill'
    ).then(({ default: cssVarsPonyfill }) => {
      cssVarsPonyfill(cssVars.config);
    });
  }
}

/**
 * App container
 * Entrypoint for the application
 */
export default function App({ children }: PageProps) {
  useEffect(customPolyfills, []);

  const containerStyles = css`
    display: grid;
    grid-template-columns: var(--content-grid);
    & > * {
      grid-column: 2 / 3;
    }
  `;

  return (
    <HelmetProvider>
      <Global styles={globalStyles} />

      {/* Asset meta */}
      <Helmet>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Helmet>
      <LogoJsonLd
        logo="<%= url %>/logo.png"
        url="<%= url %>"
      />

      {/* The page */}
<% if (components.includes('toasts')) { -%>
      <ToastProvider components={{ Toast, ToastContainer }} autoDismiss>
<% } -%>
        <div
          css={[
            containerStyles,
            css`
              position: relative;
              grid-template-rows: 1fr;
              min-height: 100vh;
            `
          ]}
        >
          <main
            css={[
              containerStyles,
              css`
                grid-column: 1 / 4;
                grid-row: 1;
                -ms-grid-row: 1;
                ${msGridRows(30)}
              `
            ]}
          >
            {children}
          </main>
        </div>
<% if (components.includes('toasts')) { -%>
      </ToastProvider>
<% } -%>
    </HelmetProvider>
  );
}
