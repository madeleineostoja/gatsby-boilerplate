import { css } from '@emotion/core';
import React from 'react';
import { AdaptiveCarouelProps, AdaptiveCarousel, AdaptiveItem } from '.';

export default {
  title: 'Components/AdaptiveCarousel',
  component: AdaptiveCarousel,
  subcomponents: { AdaptiveItem }
};

const items = [...Array(6)].map((e, i) => (
  <AdaptiveItem
    css={css`
      width: 33.3%;
      padding: var(--gap-1);
    `}
    key={i}
  >
    <img src="https://source.unsplash.com/featured/900x600" />
  </AdaptiveItem>
));

export const Default = (props: AdaptiveCarouelProps) => {
  return <AdaptiveCarousel {...props}>{items}</AdaptiveCarousel>;
};

/** Carousel mode will always be in a carousel*/
export const Carousel = () => {
  return <AdaptiveCarousel mode="carousel">{items}</AdaptiveCarousel>;
};

/** Grid mode will always be in a grid, responsive to viewport */
export const Grid = () => {
  return <AdaptiveCarousel mode="grid">{items}</AdaptiveCarousel>;
};
