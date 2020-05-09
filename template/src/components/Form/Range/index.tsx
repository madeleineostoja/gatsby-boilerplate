import { css } from '@emotion/core';
import React from 'react';
import { Range as ReactRange } from 'react-range';

export type RangeProps = {
  value?: number;
  onChange?(value?: number): void;
};

/**
 * Custom range input
 */
export function Range({ value = 0, onChange, ...props }: RangeProps) {
  return (
    <ReactRange
      values={[value]}
      onChange={(values: number[]) => onChange && onChange(values[0])}
      renderTrack={({ props, children }) => (
        <div
          css={css`
            height: 2px;
            width: 100%;
            border-radius: 2px;
            background: var(--color-primary);
          `}
          {...props}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          css={css`
            height: 0.75rem;
            width: 0.75rem;
            border-radius: var(--radius-100);
            background: var(--color-primary);
            transform: translateY(-50%);
          `}
          {...props}
        />
      )}
      {...props}
    />
  );
}
