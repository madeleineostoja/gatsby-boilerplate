import { css } from '@emotion/core';
import React, { ReactNode, HTMLProps } from 'react';
import { subgrid } from 'satchel-css';

export type SectionProps = {
  /** Whether full bleed (past content grid) */
  fullWidth?: boolean;
  /** Whether full bleed only when below content max-width */
  gutterless?: boolean;
  /** Vertical spacing */
  spacing?: 'default' | 'first' | 'last' | 'standalone';
  /** Content of the section */
  children: ReactNode;
} & HTMLProps<HTMLDivElement>;

/**
 * Section component
 * Basic layout component for page sections
 */
export function Section({
  fullWidth,
  gutterless,
  spacing = 'default',
  children,
  ...props
}: SectionProps) {
  return (
    <section
      css={[
        css`
          padding: var(--section-gutter) 0;
          @media (min-width: 35em) {
            ${spacing === 'standalone' &&
              css`
                padding: var(--section-gutter-double) 0;
              `}
            ${spacing === 'first' &&
              css`
                padding-top: var(--section-gutter-double);
              `}
            ${spacing === 'last' &&
              css`
                padding-bottom: var(--section-gutter-double);
              `}
          }
        `,
        fullWidth &&
          css`
            ${subgrid}
            & > * {
              grid-column: 2 / 3;
            }
          `,
        gutterless &&
          css`
            margin-left: var(--page-gutter-offset);
            margin-right: var(--page-gutter-offset);
          `
      ]}
      {...props}
    >
      {children}
    </section>
  );
}
