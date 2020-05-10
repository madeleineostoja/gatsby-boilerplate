import { css } from '@emotion/core';
import { normalize } from 'satchel-css';

/**
 * Base document styles
 */
export const base = css`
  ${normalize({
    base: 'remedy',
    fontSmoothing: true,
    resetMargins: true,
    resetHeadings: true,
  })}

  html {
    color: var(--color-text);
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  body {
    position: relative;
    font: var(--font-default);
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font: var(--font-heading);
  }

  /* Strip default anchor styles */
  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }
`;