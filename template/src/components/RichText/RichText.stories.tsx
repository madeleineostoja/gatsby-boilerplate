import React from 'react';
import { RichText } from '.';

export default {
  title: 'Components/RichText',
  component: RichText
};

const content = '<p><%= description %></p>';

export const Default = () => <RichText content={content} />;
