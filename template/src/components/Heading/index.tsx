import { css } from '@emotion/core';
import React, { HTMLProps, ReactNode } from 'react';
import { BREAKPOINTS } from '../../lib/css';

const MQ = {
  mobile: `min-width: ${BREAKPOINTS.mobile}em`,
  tablet: `min-width: 45em`,
  desktop: `min-width: 60em`
};

export type HeadingProps = {
  secondary?: boolean;
  centered?: boolean;
  children: ReactNode;
} & HTMLProps<HTMLHeadingElement>;

/**
 * Consistent copy sizing and styles throughout the site <br />
 * Responsive to viewport size
 */
export function Heading({
  secondary,
  centered,
  children,
  ...props
}: HeadingProps) {
  const Element = secondary ? 'h2' : 'h1';

  return (
    <Element
      css={[
        css`
          font-size: var(--scale-1);
          font-weight: var(--font-weight-semibold);
          line-height: var(--leading-small);
        `,
        centered &&
          css`
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          `,
        !secondary &&
          css`
            font-size: var(--scale-2);
            @media (${MQ.mobile}) {
              font-size: var(--scale-3);
            }
            @media (${MQ.desktop}) {
              font-size: var(--scale-4);
            }
          `
      ]}
      {...props}
    >
      {children}
    </Element>
  );
}
