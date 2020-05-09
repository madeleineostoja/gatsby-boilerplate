import React, { useState } from 'react';
import { Overlay, OverlayProps } from '.';

export default {
  title: 'Components/Overlay',
  component: Overlay,
  decorators: [(story: any) => <div style={{ height: '50rem' }}>{story()}</div>]
};
export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Overlay</button>
      <Overlay open={isOpen} background="black">
        <h1 style={{ color: 'white', marginBottom: '1rem' }}>Overlay</h1>
        <button onClick={() => setIsOpen(false)}>Close Overlay</button>
      </Overlay>
    </>
  );
};
