import { css } from '@emotion/core';
import React, { HTMLAttributes, ReactNode } from 'react';

export function Page({
  children,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <main
      css={css`
        display: grid;
        grid-template-columns: var(--content-grid);
        margin: -30px -20px 0;
        & > * {
          grid-column: 2 / 3;
        }
      `}
      {...props}
    >
      {children}
    </main>
  );
}
