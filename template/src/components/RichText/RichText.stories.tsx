import React from 'react';
import { RichText, RichTextProps } from '.';

export default {
  title: 'Components/RichText',
  component: RichText
};
export const Default = ({
  content = '<p>An HTML paragraph of text</p>'
}: RichTextProps) => <RichText {...{ content }} />;
