import React from 'react';
import { TextArea, TextAreaProps } from '.';

export default {
  title: 'Components/Form/TextArea',
  component: TextArea
};
export const Default = (props: TextAreaProps) => (
  <TextArea placeholder="Type a message" {...props} />
);
