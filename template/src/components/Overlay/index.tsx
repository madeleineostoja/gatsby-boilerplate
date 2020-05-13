import { css } from '@emotion/core';
import React, { ReactNode, useRef } from 'react';
import { Portal } from 'react-portal';
import { animated, useTransition } from 'react-spring';
import { useKey } from 'react-use';
import { lockScroll } from '../../lib/utils';

export type OverlayProps = {
  /** Whether the overlay is open */
  open: boolean;
  /** Z-index of the overlay */
  layer?: string | number;
  /** Whether to close the overlay when clicked */
  closeOnClick?: boolean;
  /** Action when overlay closes */
  onClose?(): void;
  /** Content of the overlay */
  children: ReactNode;
};

/**
 * Full screen overlay
 */
export function Overlay({
  open,
  layer = 'var(--layer-top)',
  closeOnClick,
  onClose = () => null,
  children,
  ...attrs
}: OverlayProps) {
  const transitions = useTransition(open, null, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: {
        mass: 1,
        tension: 200,
        friction: 15
      }
    }),
    portal = useRef(null);

  if (portal && portal.current) {
    portal.current.defaultNode.style.position = 'relative';
    portal.current.defaultNode.style.zIndex = layer;
  }

  if (open) {
    lockScroll(true);
  } else {
    lockScroll(false);
  }

  useKey('Escape', onClose);

  return (
    <Portal ref={portal}>
      {transitions.map(({ item: isOpen, key, props }) => (
        <animated.div
          css={css`
            z-index: var(--layer-top);
          `}
          key={key}
          style={props}
        >
          {isOpen ? (
            <div
              css={css`
                position: fixed;
                display: grid;
                grid-template-columns: var(--content-grid);
                background: white;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: scroll;
                -webkit-overflow-scrolling: touch;
                & > * {
                  grid-column: 2 / 3;
                }
              `}
              onClick={e => {
                if (closeOnClick) {
                  e.preventDefault();
                  if (e.target === e.currentTarget) {
                    onClose();
                  }
                }
              }}
              {...attrs}
            >
              {children}
            </div>
          ) : null}
        </animated.div>
      ))}
    </Portal>
  );
}
