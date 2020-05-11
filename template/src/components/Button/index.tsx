import { css } from '@emotion/core';
import React, { HTMLProps, ReactNode } from 'react';
import { Link, LinkProps } from '../Link';
import { reset } from 'satchel-css';

export type ButtonProps = {
  /** Href to link to */
  href?: string;
  /** Whether the button is busy */
  busy?: boolean;
  /** UI theme of the button */
  theme?: 'default';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether to go full width on mobile */
  responsive?: boolean;
  /** Content of the button */
  children: ReactNode;
  /** Action to perform when clicked */
  onClick?(): void;
} & (HTMLProps<HTMLButtonElement> | LinkProps | any);

/**
 * Adaptive button with themes and sizes. <br />
 * Use it for CTA links, click handlers, and form submits.
 */
export function Button({
  href,
  busy,
  theme = 'default',
  disabled,
  responsive = true,
  children,
  ...props
}: ButtonProps) {
  const Element = href ? Link : 'button';
  return (
    <Element
      css={[
        css`
          ${reset('button')};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: var(--leading-none);
          padding: var(--spacing-0) var(--spacing-1);
          min-width: 6rem;
          transition: all 200ms ease;
          border-radius: var(--radius-1);
          outline: none !important;
          &:active {
            filter: brightness(80%) saturate(110%);
          }
        `,
        responsive &&
          css`
            @media (max-width: 35em) {
              display: flex;
              width: 100%;
            }
          `,
        busy &&
          css`
            opacity: 0.5;
            pointer-events: none;
          `,
        disabled &&
          css`
            pointer-events: none;
            background: var(--color-grey-300);
            color: var(--color-grey-700);
          `
      ]}
      {...(href ? { href } : {})}
      {...props}
    >
      {children}
    </Element>
  );
}
