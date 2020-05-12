import React from 'react';
import { TwoUp, TwoUpProps } from '.';
import { Heading } from '../Heading';
import { Copy } from '../Copy';

export default {
  title: 'Components/TwoUp',
  component: TwoUp
};

const dummyContent = {
  primary: (
    <>
      <Heading>Heading</Heading>
      <Copy content="<p><%= description %></p>" />
    </>
  ),
  secondary: <img src="https://source.unsplash.com/random/900x600" />
};

export const Default = ({
  primary = dummyContent.primary,
  secondary = dummyContent.secondary,
  ...props
}: TwoUpProps) => (
  <TwoUp
    {...{
      primary,
      secondary,
      ...props
    }}
  />
);

/** Reveresed layout. Panels stack in proper order on mobile */
export const Reverse = () => (
  <TwoUp
    primary={dummyContent.primary}
    secondary={dummyContent.secondary}
    reverse
  />
);

/** Asymmetrical layout. Panels are appropriately sized when stacked on mobile */
export const Asymmetrical = () => (
  <TwoUp
    primary={dummyContent.primary}
    secondary={dummyContent.secondary}
    asymmetrical
  />
);
