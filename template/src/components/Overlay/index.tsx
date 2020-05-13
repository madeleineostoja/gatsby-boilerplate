import { css } from '@emotion/core';
import React, { ReactNode } from 'react';
import { Portal } from 'react-portal';
import { animated, useTransition } from 'react-spring';
import { useKey } from 'react-use';
import { lockScroll } from '../../lib/utils';

export type OverlayProps = {
  /** Whether the overlay is open */
  open: boolean;
  /** Z-index of the overlay */
  layer?: string | number;
  /** Action when overlay closes */
  onRequestClose?(): void;
  /** Content of the overlay */
  children: ReactNode;
};

/**
 * Full screen overlay
 */
export function Overlay({
  open,
  layer = 'var(--layer-top)',
  onRequestClose,
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
    portal = document.createElement('div');

  portal.style.position = 'relative';
  portal.style.zIndex = layer.toString();
  document.body.appendChild(portal);

  if (open) {
    lockScroll(true);
  } else {
    lockScroll(false);
  }

  useKey('Escape', onRequestClose);

  return (
    <Portal node={portal}>
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
                background: white;
                grid-template-columns: var(--content-grid);
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
