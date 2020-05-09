import { css, keyframes } from '@emotion/core';
import React, {
  Children,
  cloneElement,
  ReactNode,
  useRef,
  useState,
  HTMLProps
} from 'react';
import { useInView } from 'react-intersection-observer';
import { useBreakpoint } from '../../lib/hooks';
import { subgrid } from 'satchel-css';

const EASEIN_LAG = 150,
  MQ = {
    tablet: 'min-width: 65em'
  },
  FADE_UP = keyframes`
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

export type AdaptiveCarouelProps = {
  /** View mode of the carousel */
  mode?: 'auto' | 'carousel' | 'grid';
  /** Viewport width that auto mode triggers */
  breakpoint?: string;
  /** Flex alignment of grid mode */
  alignment?: string;
  /** Gutter used for items */
  gutter?: string;
  /** Whether to animate items in */
  easeIn?: boolean;
  /** AdaptiveItems */
  children: AdaptiveItemProps;
} & HTMLProps<HTMLDivElement>;

export type AdaptiveItemProps = {
  /** _{Inherited from AdaptiveCarousel}_ */
  carousel?: boolean;
  /** _{Inherited from AdaptiveCarousel}_ */
  gutter?: string;
  /** _{Inherited from AdaptiveCarousel}_ */
  easeIn?: boolean;
  /** _{Inherited from AdaptiveCarousel}_ */
  ready?: boolean;
  /** Content of the item */
  children?: ReactNode;
} & HTMLProps<HTMLDivElement>;

/**
 * An adaptable grid -> carousel layout
 */
export function AdaptiveCarousel({
  mode = 'auto',
  breakpoint = '45em',
  alignment = 'flex-start',
  gutter = 'var(--grid-gap)',
  easeIn = true,
  children,
  ...attrs
}: AdaptiveCarouelProps) {
  const isMobile = useBreakpoint(`(max-width: ${breakpoint})`, false),
    carouselContainer = useRef<HTMLDivElement>(null),
    [state, setState] = useState({
      isScrolling: false,
      clientX: 0,
      scrollX: 0,
      enteredViewport: false
    }),
    isCarousel = (mode === 'auto' && isMobile) || mode === 'carousel',
    [ref, inView] = useInView({ threshold: 0.3 });

  if (inView && !state.enteredViewport) {
    setState({ ...state, enteredViewport: true });
  }

  function onMouseDown({ clientX }: { clientX: number }) {
    setState({ ...state, isScrolling: isCarousel, clientX });
  }

  function onMouseUp() {
    setState({ ...state, isScrolling: false });
  }

  function onMouseMove(e: { clientX: number }) {
    const { clientX, scrollX, isScrolling } = state;

    if (!isScrolling || !carouselContainer.current) {
      return;
    }

    carouselContainer.current.scrollLeft = scrollX + e.clientX - clientX;
    setState({
      ...state,
      scrollX: scrollX - e.clientX + clientX,
      clientX: e.clientX
    });
  }

  return (
    <div
      ref={carouselContainer}
      css={[
        css`
          ${subgrid}
          position: relative;
          outline: none !important;
        `,
        isCarousel &&
          css`
            padding-bottom: 2rem;
            overflow-x: scroll;
            overflow-y: hidden;
            -ms-overflow-style: none;
            -webkit-overflow-scrolling: touch;
            cursor: grab;
            scrollbar-width: none;
            &::-webkit-scrollbar {
              display: none;
            }
          `
      ]}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      role="button"
      tabIndex={-1}
      {...attrs}
    >
      <div
        css={[
          css`
            grid-column: 2 / 3;
            display: flex;
            flex-wrap: wrap;
            overflow: visible;
            margin: calc(0px - ${gutter});
            justify-content: ${alignment};
          `,
          isCarousel &&
            css`
              flex-wrap: nowrap;
              justify-content: flex-start;
              user-select: none;
              img {
                pointer-events: none;
              }
            `
        ]}
        className="adaptiveCarousel-inner"
        ref={ref}
      >
        {Children.map(children, (child: any, i: number) =>
          cloneElement(child, {
            carousel: isCarousel,
            gutter,
            easeIn: easeIn && !isCarousel,
            style: easeIn ? { animationDelay: `${EASEIN_LAG * i}ms` } : {},
            ready: state.enteredViewport
          })
        )}
        {isCarousel && (
          <div
            css={css`
              width: calc(var(--page-gutter) - ${gutter});
              flex-shrink: 1;
              @media (${MQ.tablet}) {
                flex-shrink: 0;
                padding: ${gutter};
              }
            `}
          ></div>
        )}
      </div>
    </div>
  );
}

/** Used for children of the carousel */
export function AdaptiveItem({
  carousel,
  gutter = '1rem',
  easeIn = true,
  ready,
  children,
  ...props
}: AdaptiveItemProps) {
  return (
    <div
      css={[
        carousel &&
          css`
            width: 70vw;
            max-width: 30rem;
            flex-shrink: 0;
            padding: ${gutter};
          `,
        easeIn &&
          css`
            opacity: 0;
            transform: translateY(2rem);
            ${ready &&
              css`
                animation: ${FADE_UP} 500ms var(--easing-decelerate) forwards;
              `}
          `
      ]}
      {...props}
    >
      {children}
    </div>
  );
}
