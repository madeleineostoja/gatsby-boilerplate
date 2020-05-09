import React from 'react';
import { ToastProvider, useToasts } from 'react-toast-notifications';
import { Toast, ToastContainer } from '.';

export default {
  title: 'Components/Toast',
  component: ToastContainer,
  subcomponents: { Toast }
};
export const Default = () => {
  const Trigger = () => {
    const { addToast } = useToasts();
    return (
      <button onClick={() => addToast('Notification')}>Trigger toast</button>
    );
  };
  return (
    <ToastProvider components={{ Toast, ToastContainer }} autoDismiss>
      <Trigger />
    </ToastProvider>
  );
};
