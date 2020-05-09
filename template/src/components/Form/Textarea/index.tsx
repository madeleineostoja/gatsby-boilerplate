import { css } from '@emotion/core';
import React from 'react';
import { reset } from 'satchel-css';
import TextArea from 'react-textarea-autosize';

export type TextareaProps = {
  rows?: number;
};

/**
 * Controlled text area that grows based on input
 */
export function Textarea({ rows = 6, ...props }: TextareaProps) {
  return (
    <TextArea
      css={css`
        ${reset('input')}
        width: 100%;
        max-height: 30rem;
        resize: none !important;
      `}
      minRows={rows}
      {...props}
    />
  );
}
