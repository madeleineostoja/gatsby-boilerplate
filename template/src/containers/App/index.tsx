import { css, Global } from '@emotion/core';
import { PageProps } from 'gatsby';
import { LogoJsonLd } from 'gatsby-plugin-next-seo';
import { shimmie } from 'pollen-css/utils';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { msGridRows } from 'satchel-css';
<% if (components.includes('toasts')) { -%>
  import { ToastProvider } from 'react-toast-notifications';
  import { Toast, ToastContainer } from '../../components/Toast';
  <% } -%>
import globalStyles from './styles';

/**
 * App container
 * Entrypoint for the application
 */
export default function App({ children }: PageProps) {
  useEffect(() => {
    shimmie();
  }, []);

  const containerStyles = css`
    display: grid;
    grid-template-columns: var(--content-grid);
    & > * {
      grid-column: 2 / 3;
    }
  `;

  return (
    <>
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
    </>
  );
}
