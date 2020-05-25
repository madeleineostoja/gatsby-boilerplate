import React from 'react';
import { Checkbox, CheckboxProps } from '.';

export default {
  title: 'Components/Form/Checkbox',
  component: Checkbox
};

export const Default = (props: CheckboxProps) => (
  <Checkbox label="Keep me informed" {...props} />
);
