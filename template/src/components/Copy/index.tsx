import { css } from '@emotion/core';
import React from 'react';
import { RichText } from '../RichText';

const MQ = {
  mobile: 'min-width: 35em'
};

export type CopyProps = {
  /** HTML or text content to render */
  content: string;
  /** Whether content is a plain string */
  plaintext?: boolean;
  /** Whether to center the copy */
  centered?: boolean;
};

/**
 * Consistent copy sizing and styles throughout the site <br />
 * Responsive to viewport size
 */
export function Copy({ content, plaintext, centered, ...props }: CopyProps) {
  return (
    <div
      css={[
        css`
          @media (${MQ.mobile}) {
            font-size: var(--scale-1);
          }
        `,
        centered &&
          css`
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          `
      ]}
      {...props}
    >
      {plaintext ? <p>{content}</p> : <RichText content={content} />}
    </div>
  );
}
