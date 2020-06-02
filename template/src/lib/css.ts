import { css } from '@emotion/core';
import { subgrid } from 'satchel-css';

/**
 * Helper to update CSS variables
 * @param properties Object of CSS properties
 */
export function setProperties(properties: any) {
  Object.keys(properties).forEach((property: string) =>
    document.documentElement.style.setProperty(property, properties[property])
  );
}

/**
 * Global breakpoints
 */
export const BREAKPOINTS = {
  mobile: '35em'
};

/**
 * Subgrid with page container inheritence
 */
export const subPageGrid = css`
  ${subgrid}
  & > * {
    grid-column: 2 / 3;
  }
`;
