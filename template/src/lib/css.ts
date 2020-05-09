import { css } from '@emotion/core';

/**
 * Global breakpoints
 */
export const BREAKPOINTS = {
  mobile: '35em'
};

/**
 * Default link styling
 */
export const link = css`
  text-decoration: underline;
  transition: opacity 150ms ease;
  &:hover {
    opacity: 0.8;
  }
`;
