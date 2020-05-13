import React, { useState } from 'react';
import { Overlay } from '.';
import { Button } from '../Button';
import { Heading } from '../Heading';

export default {
  title: 'Components/Overlay',
  component: Overlay
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Overlay</button>
      <Overlay open={isOpen}>
        <div style={{ padding: '3rem 0' }}>
          <Heading style={{ marginBottom: '2rem' }}>Overlay</Heading>
          <Button onClick={() => setIsOpen(false)}>Close Overlay</Button>
        </div>
      </Overlay>
    </>
  );
};
