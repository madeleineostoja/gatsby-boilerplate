---
to: src/components/<%%= name %%>/index.tsx
---
import { css } from '@emotion/core';
import React from 'react';
<%% if (locals.props) { -%%>

export type <%%= name %%>Props = {
<%% props.forEach(prop => { -%%>
  /** <%%= prop.description %%> */
  <%%= prop.name %%>: <%%= prop.type %%>;
<%% }) -%%>
};
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
<%% } else { -%%>props<%% } %%>) {
  return (
    <div css={css``} {...props}>

    </div>
  );
}