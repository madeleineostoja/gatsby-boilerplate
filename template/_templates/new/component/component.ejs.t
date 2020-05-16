---
to: src/components/<%%= name %%>/index.tsx
---
import { css } from '@emotion/core';
import React, { HTMLProps } from 'react';
<%% if (locals.props) { -%%>

export type <%%= name %%>Props = {
<%% props.forEach(prop => { -%%>
  /** <%%= prop.description %%> */
  <%%= prop.name %%>: <%%= prop.type %%>;
<%% }) -%%>
} & HTMLProps<HTMLDivElement>;
<%% } -%%>

/**
 * <%%= description %%>
 */
export function <%%= name %%>(<%% if (locals.props) { %%>{
<%% props.forEach(prop => { -%%>
  <%%= prop.name.replace(/(\?)$/, '') %%>,
<%% }) -%%>
  ...props
}: <%%= name %%>Props
<%% } else { -%%>props: HTMLProps<HTMLDivElement><%% } %%>) {
  return (
    <div css={css``} {...props}>

    </div>
  );
}