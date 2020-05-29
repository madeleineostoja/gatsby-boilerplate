import { css } from '@emotion/core';
import React, { HTMLAttributes, ReactNode } from 'react';

export function Page({
  children,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: var(--page-grid);
        & > * {
          grid-column: 2 / 3;
        }
      `}
    >
      <main
        css={css`
          display: grid;
          grid-template-columns: var(--content-grid);
          grid-gap: var(--margin);
          & > * {
            grid-column: 1 / -1;
          }
        `}
        {...props}
      >
        {children}
      </main>
    </div>
  );
}
