import React from 'react';
import { Img, ImageProps } from '.';
import { css } from '@emotion/core';
import { aspect } from 'satchel-css';

export default {
  title: 'Components/Img',
  component: Img
};

const image = {
  url: 'https://source.unsplash.com/random/900x600',
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
