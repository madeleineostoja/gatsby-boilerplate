import { css } from '@emotion/core';
import React from 'react';
import ReactTextArea from 'react-textarea-autosize';
import { reset } from 'satchel-css';

export type TextAreaProps = {
  rows?: number;
} & Partial<ReactTextArea['props']> &
  any;

/**
 * Controlled text area that grows based on input
 */
export function TextArea({ rows = 6, ...props }: TextAreaProps) {
  return (
    <ReactTextArea
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
