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
`;