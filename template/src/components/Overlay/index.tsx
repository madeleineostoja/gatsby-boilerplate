import { css } from '@emotion/core';
import React, { ReactNode } from 'react';
import { animated, useTransition } from 'react-spring';
import { useKey } from 'react-use';
import { lockScroll } from '../../lib/utils';

export type OverlayProps = {
  /** Whether the overlay is open */
  open: boolean;
  /** Background color of the overlay */
  background?: string;
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
  background = 'white',
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
      friction: 15,
      clamp: true
    }
  });

  if (open) {
    lockScroll(true);
  } else {
    lockScroll(false);
  }

  useKey('Escape', onRequestClose);

  return (
    <>
      {transitions.map(({ item: isOpen, key, props }) => (
        <animated.div
          css={css`
            z-index: var(--layer-5);
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
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: scroll;
                -webkit-overflow-scrolling: touch;
              `}
              style={{ background }}
              {...attrs}
            >
              <div
                css={css`
                  grid-column: 2 / 3;
                  padding: 3rem 0;
                `}
              >
                {children}
              </div>
            </div>
          ) : null}
        </animated.div>
      ))}
    </>
  );
}
