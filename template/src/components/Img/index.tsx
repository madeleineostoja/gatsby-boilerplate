import { css, Global, keyframes } from '@emotion/core';
import { FluidObject } from 'gatsby-image';
import GatsbyImg, {
  GatsbyImageWithIEPolyfillProps
} from 'gatsby-image/withIEPolyfill';
import mediumZoom from 'medium-zoom';
import React, { useEffect, useRef, useState, HTMLProps } from 'react';

declare global {
  interface Window {
    _imgZoomable: any;
  }
}

/**
 * Fluid image datga
 * @param {FluidObject} fluid Something
 */
export type ImageProps = {
  /** Responsive image data */
  fluid: FluidObject;
  /** Fallback image src URL */
  url: string;
  /** Alt text for the image */
  alt?: string;
  /** Whether the user should be able to open the image fullscreen */
  zoomable?: boolean;
  /** Whether the image should fit its box like background-size: cover */
  cover?: boolean;
} & any;

/**
 * Supercharged images. Adaptively uses responsive source sets if data is available, falling back to a static image
 */
export function Img({
  fluid,
  url,
  alt,
  zoomable,
  cover,
  ...props
}: ImageProps) {
  const imageElement = useRef<any>(null),
    [loaded, setLoaded] = useState(false),
    fadeIn = keyframes`
    from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    `;

  useEffect(() => {
    if (!zoomable || (!!fluid && !loaded)) {
      return;
    }

    if (typeof window._imgZoomable === 'undefined') {
      window._imgZoomable = mediumZoom();
      window._imgZoomable.update({
        margin: 45,
        background: 'var(--color-black)'
      });
    }

    if (!imageElement.current) {
      return;
    }

    window._imgZoomable.attach(
      !!fluid ? imageElement.current.imageRef.current : imageElement.current
    );
  }, [zoomable, loaded, fluid]);

  return (
    <>
      <Global
        styles={css`
          .medium-zoom-overlay {
            z-index: var(--layer-top);
            animation: ${fadeIn} 300ms var(--easing-decelerate) forwards;
          }

          .medium-zoom-image--opened {
            z-index: var(--layer-top);
          }
        `}
      />
      {!!fluid ? (
        <GatsbyImg
          ref={imageElement}
          fluid={fluid}
          alt={alt}
          objectFit={cover ? 'cover' : 'fill'}
          onLoad={() => setLoaded(true)}
          {...props}
        />
      ) : (
        <div {...props}>
          <img
            ref={imageElement}
            css={[
              css`
                vertical-align: middle;
                max-width: 100%;
                max-height: 100%;
              `,
              cover &&
                css`
                  object-fit: cover;
                  height: 100%;
                `
            ]}
            src={url}
            alt={alt}
          />
        </div>
      )}
    </>
  );
}
