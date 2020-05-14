---
to: "src/<%= isTemplate ? 'templates' : 'pages' %>/<%= type %>.tsx"
---
<% Class = h.inflection.classify(type) -%>
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import React from 'react';
import { Meta } from '../components/Meta';
import { usePreview } from '../lib/hooks';

export default function <%= Class %><%= isTemplate ? 'Template' : 'Page' %>({ data: query }: GatsbyTypes.Prismic<%= Class %> ){
  const { prismic<%= Class %> } = usePreview(query),
    { data } = prismic<%= Class %>;

  if (!data) {
    return null;
  }

  return (
    <>
      <Meta  title={data.meta_title} description={data.meta_description} />
    </>
  );
}

export const query = graphql`
  query<%= isTemplate ? '($uid: String!)' : '' %> <%= Class %> {
    prismic<%= Class %><%= isTemplate ? '(uid: {eq: $uid })' : '' %> {
      data {
        meta_title
        meta_description
      }
    }
  }
`
