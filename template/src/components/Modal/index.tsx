import { css } from '@emotion/core';
import React, { ReactNode } from 'react';
import { Overlay, OverlayProps } from 'react-portal-overlay';

export type ModalProps = {
  /** Whether modal is open */
  open: boolean;
  /** Content of the modal */
  className?: string;
  /** Content of the modal */
  children: ReactNode;
} & Partial<OverlayProps>;

/**
 * Modal component that shows a popup in-app
 */
export function Modal({ open, children, className, ...props }: ModalProps) {
  return (
    <Overlay
      open={open}
      closeOnClick
      closeOnEsc
      css={css`
        display: grid;
        grid-template-columns: var(--content-grid);
        background: rgba(0, 0, 0, 0.3);
      `}
      {...props}
    >
      <div
        className={className}
        css={css`
          grid-column: 2 / 3;
          align-self: center;
          justify-self: center;
          width: 100%;
          background: white;
          border-radius: var(--radius-2);
        `}
      >
        {children}
      </div>
    </Overlay>
  );
}
