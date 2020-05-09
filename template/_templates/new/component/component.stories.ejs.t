---
to: src/components/<%%= name %>/<%%= name %>.stories.tsx
---
import React from 'react';
import { <%%= name %>, <%%= name %>Props } from '.';

export default {
  title: 'Components/<%%= name %>',
  component: <%%= name %>
};

export const Default = (props: <%%= name %>Props) => (
  <<%%= name %> {...props} />
);