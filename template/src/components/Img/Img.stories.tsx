import React from 'react';
import { Img, ImageProps } from '.';

export default {
  title: 'Components/Img',
  component: Img
};
export const Default = ({
  url = 'https://source.unsplash.com/random/900x600',
  alt = 'A random image',
  ...props
}: ImageProps) => <Img {...{ url, alt, ...props }} />;
