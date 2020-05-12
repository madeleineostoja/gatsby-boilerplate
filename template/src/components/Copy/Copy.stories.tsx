import React from 'react';
import { Copy, CopyProps } from '.';

export default {
  title: 'Components/Copy',
  component: Copy
};

const content = `<p><%= description %></p>`

export const Default = (props: CopyProps) => (
  <Copy content={content} {...props} />
);

/** Centered text, both in justification and on the page */
export const Centered = () => <Copy content={content} centered />;
