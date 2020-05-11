import { css } from '@emotion/core';
import React from 'react';
import { Range as ReactRange, getTrackBackground } from 'react-range';

export type RangeProps = {
  /** Value of the range input */
  value: number;
  /** Minimum value of the range */
  min?: number;
  /** Maximum value of the range */
  max?: number;
  /** Function to call when value changes */
  onChange?(value?: number): void;
};

/**
 * Custom range input
 */
export function Range({
  value = 0,
  min = 0,
  max = 100,
  onChange,
  ...props
}: RangeProps) {
  return (
    <ReactRange
      values={[value]}
      onChange={(values: number[]) => onChange && onChange(values[0])}
      renderTrack={({ props, children }) => (
        <div
          css={css`
            height: 4px;
            width: 100%;
            border-radius: 4px;
            background: ${getTrackBackground({
              min,
              max,
              values: [value],
              colors: ['var(--color-primary)', 'var(--color-grey-100)']
            })};
          `}
          {...props}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          css={css`
            position: relative;
            height: 1.5rem;
            width: 1.5rem;
            border-radius: var(--radius-round);
            background: var(--color-primary);
            transform: translateY(-50%);
            outline: none !important;
          `}
          {...props}
        />
      )}
      {...props}
    />
  );
}
