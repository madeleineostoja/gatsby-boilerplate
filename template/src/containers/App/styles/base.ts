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
    font-family: var(--font-family);
    line-height: var(--leading-normal);
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: var(--leading-small);
  }

  /* Strip default anchor styles */
  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }
`;