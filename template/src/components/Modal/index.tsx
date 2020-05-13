import { css } from '@emotion/core';
import React, { ReactNode } from 'react';
import { Overlay } from '../Overlay';

export type ModalProps = {
  /** Whether modal is open */
  open: boolean;
  /** Action to perform when the modal is closed */
  onClose?(): any;
  /** Content of the modal */
  children: ReactNode;
};

/**
 * Modal component that shows a popup in-app
 */
export function Modal({ open, onClose, children, ...props }: ModalProps) {
  return (
    <>
      <Overlay
        closeOnClick
        css={css`
          background: rgba(0, 0, 0, 0.3);
        `}
        {...{ open, onClose }}
      >
        <div
          css={css`
            align-self: center;
            justify-self: center;
            width: 100%;
          `}
          {...props}
        >
          {children}
        </div>
      </Overlay>
    </>
  );
}
