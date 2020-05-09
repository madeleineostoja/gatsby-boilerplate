import { css } from '@emotion/core';
import React, { HTMLProps } from 'react';
import ReactSelect from 'react-select';

export type SelectProps = {
  options: { value: string; label: string }[];
} & HTMLProps<HTMLSelectElement>;

/**
 * Custom select form input
 */
export function Select({ options, ...props }: SelectProps) {
  return (
    <ReactSelect
      css={css`
        & .select__indicator-separator {
          display: none;
        }
        & .select__control {
          border: 1px solid grey;
          box-shadow: none;
        }
        & .select__value-container {
          padding: 0.75em 0.6em 0.6em;
        }
        & .select__option {
          font: inherit;
        }
      `}
      {...{ options, props }}
      classNamePrefix="select"
    />
  );
}
