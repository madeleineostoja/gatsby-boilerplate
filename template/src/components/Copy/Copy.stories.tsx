import React from 'react';
import { Copy, CopyProps } from '.';

export default {
  title: 'Components/Copy',
  component: Copy
};

export const Default = (props: CopyProps) => (
  <Copy content="<p>Hello, world</p>" {...props} />
);

/** Centered text, both in justification and on the page */
export const Centered = () => <Copy content="<p>Hello, world</p>" centered />;
