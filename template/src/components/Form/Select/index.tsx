import { css } from '@emotion/core';
import React from 'react';
import ReactSelect, { Styles } from 'react-select';
import { inputStyles } from '../';

/**
 * Custom select form input
 */
export function Select(props: ReactSelect['props']) {
  const styles = {
    control: (provided, { isFocused }) => css`
      ${inputStyles}
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      border-color: ${isFocused
        ? 'var(--color-blue-700)'
        : 'var(--color-grey-300)'};
    `,
    indicatorSeparator: () => css`
      display: none;
    `,
    option: (provided, { isFocused, isSelected }) => css`
      padding: var(--spacing-00);
      &:hover {
        background: var(--color-blue-300);
      }
      background: ${isFocused || isSelected ? 'var(--color-blue-300)' : ''};
    `
  } as Styles;

  return <ReactSelect {...{ styles, ...props }} />;
}
