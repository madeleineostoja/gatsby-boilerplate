import React, { ReactNode, HTMLProps } from 'react';
import { css } from '@emotion/core';

export type TwoUpProps = {
  /** Content of the primary panel */
  primary: ReactNode;
  /** Conteent of the secondary panel */
  secondary: ReactNode;
  /** Viewport width the panels stack */
  breakpoint?: string;
  /** Whether to reverse the panel orientation */
  reverse?: boolean;
  /** Whether the content of primary should be position: sticky */
  sticky?: boolean;
  /** Whether the panel spacing should collapse when stacked */
  collapse?: boolean;
  /** Whether the panels should be centered when stacked */
  centered?: boolean;
  /** Whether to use asymettrical panel sizing */
  asymmetrical?: boolean;
} & HTMLProps<HTMLDivElement>;

/**
 * Adaptive two-column layout
 */
export function TwoUp({
  primary = null,
  secondary = null,
  breakpoint = '60em',
  reverse,
  collapse,
  centered,
  asymmetrical,
  sticky,
  ...props
}: TwoUpProps) {
  const panelStyles = css`
    @media (min-width: ${breakpoint}) {
      align-items: stretch;
      padding: 0 var(--grid-gap) !important;
    }
  `;

  return (
    <div {...props}>
      <div
        css={css`
          @media (min-width: ${breakpoint}) {
            display: flex;
            margin: 0 var(--grid-offset);
            ${centered &&
              css`
                align-items: center;
              `}
            ${reverse &&
              css`
                flex-direction: row-reverse;
              `}
          }
        `}
      >
        <div
          css={[
            panelStyles,
            css`
              margin-bottom: ${collapse
                ? 'var(--spacing-1)'
                : 'var(--spacing-2)'};
              @media (min-width: ${breakpoint}) {
                width: ${asymmetrical ? '60%' : '50%'};
                ${sticky &&
                  css`
                    position: sticky;
                    top: var(--header-offset);
                    align-self: flex-start;
                  `}
              }
            `
          ]}
        >
          {primary}
        </div>
        <div
          css={[
            panelStyles,
            css`
              @media (min-width: ${breakpoint}) {
                width: ${asymmetrical ? '40%' : '50%'};
              }
            `
          ]}
        >
          {secondary}
        </div>
      </div>
    </div>
  );
}
