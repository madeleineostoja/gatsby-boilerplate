import React from 'react';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Components/Heading',
  component: Heading
};

const content = '<%= name %>';

export const Default = (props: HeadingProps) => (
  <Heading {...props}>Heading</Heading>
);

/** Centered heading, both in justificiation and on the page */
export const Centered = () => <Heading centered>{content}</Heading>;

/** Secondary level heading */
export const Secondary = () => <Heading secondary>{content}</Heading>;
