import React from 'react';
import { Section, SectionProps } from '.';
import { Heading } from '../Heading';

export default {
  title: 'Components/Section',
  component: Section
};

export const Default = (props: SectionProps) => (
  <Section {...props}>
    <Heading>A section of content</Heading>
  </Section>
);

/** Section with 'first' spacing applied. Useful when the section is the first item on the page */
export const First = () => (
  <Section spacing="first">
    <Heading>A section of content</Heading>
  </Section>
);
