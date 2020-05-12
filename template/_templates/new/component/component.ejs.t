---
to: src/components/<%= name %>/index.tsx
---
import { css } from '@emotion/core';
import React, { HTMLProps } from 'react';

<% if (locals.props) { -%>
export type <%= name %>Props = {
<% props.forEach(prop => { -%>
  /** <%= prop.description ? prop.description : 'No description'  %> */
  <%= prop.name %><%= prop.optional ? '?' :'' %>: <%= prop.type %>;
<% }) -%>
} & HTMLProps<HTMLDivElement>;
<% } -%>

/**
 * <%= description %>
 */
export function <%= name %>(<% if (locals.props) { %>{
<% props.forEach(prop => { -%>
  <%= prop.name %>,
<% }) -%>
  ...props
}: <%= name %>Props
<% } else { -%>
  props: object
<% } -%>) {
  return (
    <div css={css``} {...props}>

    </div>
  );
}