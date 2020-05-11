import React from 'react';
import { TwoUp, TwoUpProps } from '.';
import { Heading } from '../Heading';

export default {
  title: 'Components/TwoUp',
  component: TwoUp
};

const dummyContent = {
  primary: (
    <>
      <Heading>Heading</Heading>
      <p>
        Neque donec volutpat quis torquent lacinia class leo sit cras diam
        malesuada dignissim faucibus sem integer praesent risus tellus senectus
      </p>
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
