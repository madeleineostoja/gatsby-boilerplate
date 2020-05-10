import { css } from '@emotion/core';

const mobile = `max-width: 35em`;

/**
 * Design system
 * Using Bloom as a foundation
 * https://bloom.style
 */
export const variables = css`
  :root {
    /* Type scale */

    /* Typography */

    /* Colours */

    /* Layout — Page */
    --content-max-width: 70rem;
    --page-gutter: 8vw;
    --page-gutter-offset: -8vw;
    --content-grid: minmax(var(--page-gutter), 1fr)
      minmax(0, var(--content-max-width)) minmax(var(--page-gutter), 1fr);

    /* Layout — Grids */
    --grid-gap-small: 2.5rem;
    --grid-offset-small: calc(0px - var(--grid-gap-small));
    --grid-gap: 4rem;
    --grid-offset: calc(0px - var(--grid-gap));

    @media (${mobile}) {
      --grid-gap: 3rem;
      --grid-gap-small: 1.5rem;
    }

    /* Layout — Spacing */
    --spacing-0: 2rem;
    --spacing-1: 4rem;
    --spacing-2: 6rem;
    --spacing-3: 8rem;
    --spacing-4: 12rem;

    @media (${mobile}) {
      --spacing-1: 3rem;
      --spacing-2: 4rem;
      --spacing-3: 6rem;
      --spacing-4: 8rem;
    }

    /* Layout — Constants */
    --section-gutter: var(--spacing-2);
    --section-gutter-double: calc(var(--section-gutter) * 2);
  }
`;
