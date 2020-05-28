import { css } from '@emotion/core';
import React from 'react';
import TextArea from 'react-textarea-autosize';
import { reset } from 'satchel-css';

export type TextareaProps = {
  rows?: number;
} & Partial<TextArea['props']>;

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
