import React from 'react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button
};

export const Default = (props: ButtonProps) => (
  <Button {...props}>Click me</Button>
);

/** Button in a busy state (eg: while a form is submitting) */
export const Busy = () => <Button busy={true}>Click me</Button>;

/** Disabled button (eg: while form has missing required inputs) */
export const Disabled = () => <Button disabled>Click me</Button>;
