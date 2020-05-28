import { css } from '@emotion/core';
import React from 'react';
import { aspect } from 'satchel-css';
import { ImageProps, Img } from '.';

export default {
  title: 'Components/Img',
  component: Img
};

const image = {
  url: 'https://source.unsplash.com/featured/900x600',
  alt: 'A random image'
};

export const Default = (props: ImageProps) => (
  <Img {...{ ...image, ...props }} />
);

/** An image that auto-crops to fit in an aspect-ratio */
export const Cover = (props: ImageProps) => (
  <div
    css={css`
      ${aspect(1, 1, { mode: 'absolute' })}
    `}
  >
    <Img cover {...{ ...image, ...props }} />
  </div>
);

/** A zoomable image */
export const Zoomable = (props: ImageProps) => (
  <Img zoomable {...{ ...image, ...props }} style={{ maxWidth: '25rem' }} />
);
