import React from 'react';
import { Section, SectionProps } from '.';

export default {
  title: 'Components/Section',
  component: Section
};

export const Default = (props: SectionProps) => (
  <Section {...props}>
    <h1>A section of content</h1>
  </Section>
);

/** Section with 'first' spacing applied. Useful when the section is the first item on the page */
export const First = () => (
  <Section spacing="first">
    <h1>A section of content</h1>
  </Section>
);
