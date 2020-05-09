import React from 'react';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Components/Heading',
  component: Heading
};

export const Default = (props: HeadingProps) => (
  <Heading {...props}>Heading</Heading>
);

/** Centered heading, both in justificiation and on the page */
export const Centered = () => <Heading centered>Heading</Heading>;

/** Secondary level heading */
export const Secondary = () => <Heading secondary>Heading</Heading>;
