import { css } from '@emotion/core';

/**
 * Design system
 * Using Pollen as a foundation
 * https://pollen.style
 */
export const variables = css`
  :root {
    /* Typography */
    --font-family: var(--font-family-sans);

    /* Colours */
    --color-text: var(--color-black);
    --color-text-secondary: var(--color-grey-700);

    /* Layout — Page */
    --content-max-width: var(--width-10);
    --page-gutter: 8vw;
    --page-gutter-offset: -8vw;
    --content-grid: minmax(var(--page-gutter), 1fr)
      minmax(0, var(--content-max-width)) minmax(var(--page-gutter), 1fr);

    /* Layout — Constants */
    --section-gutter: var(--spacing-5);
    --section-gutter-double: calc(var(--section-gutter) * 2);
  }
`;
