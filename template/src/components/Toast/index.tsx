import { css } from '@emotion/core';
import React, { ReactNode, HTMLProps } from 'react';

export type ToastContainerProps = {
  /** _{Inherited from ToastProvider}_ */
  hasToasts?: boolean;
} & HTMLProps<HTMLDivElement>;

export type ToastProps = {
  /** _{Inherited from ToastProvider}_ */
  children: ReactNode;
  /** _{Inherited from ToastProvider}_ */
  transitionState?: string;
} & HTMLProps<HTMLDivElement>;

/**
 * Toast notifications <br/>
 * Passed to `<ToastProvider />` from [react-toast-notifications](https://github.com/jossmac/react-toast-notifications)
 */
export function ToastContainer({ hasToasts, ...props }: ToastContainerProps) {
  return (
    <div
      css={css`
        position: fixed;
        bottom: 0;
        right: 5rem;
        padding: 1.5rem;
        z-index: var(--layer-top);
      `}
      style={{
        pointerEvents: hasToasts ? 'initial' : 'none'
      }}
      {...props}
    />
  );
}

export function Toast({ children, transitionState, ...props }: ToastProps) {
  return (
    <div
      css={css`
        font: var(--font-ui);
        font-size: var(--scale-00);
        background: var(--color-grey-700);
        color: var(--color-text);
        padding: 1rem 1.5rem;
        border-radius: var(--radius-2);
        white-space: nowrap;
        transition: transform 200ms var(--easing-standard);
        transform: translateY(${transitionState === 'entered' ? '0%' : '150%'});
      `}
      {...props}
    >
      {children}
    </div>
  );
}
