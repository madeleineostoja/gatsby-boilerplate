import { css, Global } from '@emotion/core';
import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';

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
      <Global
        styles={css`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.3);
            padding: 8vw;
            overflow: scroll;
            z-index: var(--layer-top);
          }

          /**
           * Transitions
           */
          .modal,
          .modal-overlay {
            transition: opacity 300ms var(--easing-standard);
          }

          .modal,
          .modal-overlay.open,
          .modal-overlay.open.closing .modal,
          .modal-overlay.open .modal {
            opacity: 1;
          }

          .modal-overlay,
          .modal-overlay.open.closing) {
            opacity: 0;
          }
        `}
      />
      <ReactModal
        className="modal"
        css={css`
          display: inline-block;
          position: relative;
          outline: none !important;
          width: 100%;
        `}
        overlayClassName={{
          base: 'modal-overlay',
          afterOpen: 'open',
          beforeClose: 'closing'
        }}
        isOpen={open}
        onRequestClose={onClose}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={500}
        ariaHideApp={false}
        {...props}
      >
        {children}
      </ReactModal>
    </>
  );
}
