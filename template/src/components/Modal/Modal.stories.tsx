import React, { useState } from 'react';
import { Modal, ModalProps } from '.';
import { css } from '@emotion/core';
import { Heading } from '../Heading';
import { Copy } from '../Copy';

export default {
  title: 'Components/Modal',
  component: Modal
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        css={css`
          background: white;
          padding: 3rem;
          border-radius: var(--radius-3);
        `}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Heading>Modal</Heading>
        <Copy
          content="<p>Egestas porta donec suscipit tempor aenean ultricies senectusfringilla taciti</p>"
        />
      </Modal>
    </>
  );
};
