import React from 'react';
import { Range, RangeProps } from '.';

export default {
  title: 'Components/Form/Range',
  component: Range
};

export const Default = ({ value = 10, ...props }: RangeProps) => (
  <Range {...{ value, ...props }} />
);
