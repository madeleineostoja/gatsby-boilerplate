import React from 'react';
import { Link, LinkProps } from '.';

export default {
  title: 'Components/Link',
  component: Link
};
export const Default = (props: LinkProps) => <Link {...props}>Click me</Link>;
