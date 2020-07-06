import { css } from '@emotion/core';
import { reset} from 'satchel-css';

export * from './Checkbox';
export * from './Textarea';
export * from './Select';
export * from './Range';

export const inputStyles = css`
  ${reset('input')}
  &:invalid {
    border-color: var(--color-red);
  }
  &:disabled {
    pointer-events: none;
    user-select: none;
  }
`;
