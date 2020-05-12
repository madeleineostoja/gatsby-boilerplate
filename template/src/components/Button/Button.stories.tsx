import React from 'react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button
};

const label = "Sign up";

export const Default = (props: ButtonProps) => (
  <Button {...props}>{label}</Button>
);

/** Button in a busy state (eg: while a form is submitting) */
export const Busy = () => <Button busy={true}>{label}</Button>;

/** Disabled button (eg: while form has missing required inputs) */
export const Disabled = () => <Button disabled>{label}</Button>;
