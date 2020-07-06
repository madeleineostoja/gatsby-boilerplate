import React, { useRef, useEffect } from 'react';
import { inputStyles } from './';

export default {
  title: 'Components/Form/Input',
  component: 'input'
};

export const Default = () => (
  <input type="email" css={inputStyles} placeholder="Email address" />
);

export const Disabled = () => (
  <input type="email" disabled css={inputStyles} placeholder="Email address" />
);

export const Invalid = () => {
  return (
    <input
      type="email"
      css={inputStyles}
      value="Not an email address"
      placeholder="Email address"
    />
  );
};
