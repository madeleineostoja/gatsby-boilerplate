import { css } from '@emotion/core';
import React, { useState } from 'react';
import { ReactComponent as CheckIcon } from '../../../assets/icons/check.svg';

export type CheckboxProps = {
  /** Label to display next to the checkbox */
  label?: string;
  /** Classname to apply to checkbox */
  className?: string;
  /** HTML ID to give to the checkbox */
  id?: string;
};

/**
 * Custom checkbox form component
 */
export function Checkbox({ label, className, id, ...props }: CheckboxProps) {
  const [checked, setChecked] = useState(false),
    randomId = Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

  return (
    <div css={css``} className={className}>
      <label
        htmlFor={randomId}
        css={css`
          display: inline-flex;
          align-items: center;
        `}
      >
        <CheckIcon
          css={css`
            width: 1em;
            height: 1em;
            border: 2px solid;
            margin-right: 0.5em;
            border-radius: var(--radius-1);
            fill: white;
            cursor: pointer;
            background: ${checked ? 'var(--color-blue)' : 'white'};
            border-color: ${checked
              ? 'var(--color-blue)'
              : 'var(--color-grey-100)'};
            transition: all 100ms ease;
          `}
        />
        <span>{label}</span>
      </label>
      <input
        id={randomId}
        type="checkbox"
        hidden
        onChange={({ target }) => setChecked(target.checked)}
        {...props}
      />
    </div>
  );
}
