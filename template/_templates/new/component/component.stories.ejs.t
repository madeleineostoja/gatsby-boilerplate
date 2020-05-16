---
to: src/components/<%%= name %%>/<%%= name %%>.stories.tsx
---
import React from 'react';
import { <%%= name %%><%% if (locals.props) { %%>, <%%= name %%>Props<%% } %%> } from '.';

export default {
  title: 'Components/<%%= name %%>',
  component: <%%= name %%>
};

export const Default = (<%% if (locals.props) { %%>props: <%%= name %%>Props<%% } %%>) => (
  <<%%= name %%><%% if (locals.props) { %%> {...props}<%% } %%> />
);