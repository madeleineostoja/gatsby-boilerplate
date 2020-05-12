import React from 'react';
import { SelectComponentsProps } from 'react-select/src/Select';
import { Select } from '.';

export default {
  title: 'Components/Form/Select',
  component: Select,
  decorators: [
    (storyFn: any) => <div style={{ height: '15rem' }}>{storyFn()}</div>
  ]
};

export const Default = ({
  options = [
    { value: 'cat', label: 'Cat' },
    { value: 'dog', label: 'Dog' },
    { value: 'horse', label: 'Horse' }
  ],
  placeholder = 'Favourite animal',
  ...props
}: SelectComponentsProps) => <Select {...{ options, placeholder, ...props }} />;
