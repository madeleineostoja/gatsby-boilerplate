---
to: "src/<%%= isTemplate ? 'templates' : 'pages' %>/<%%= type %>.tsx"
---
<%% Class = h.inflection.classify(type) -%>
import { css } from '@emotion/core';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { Meta } from '../../components/Meta';
import { <%%= Class %>Query } from '../../types/queries';
import { usePreview } from '../../lib/hooks';

export default function <%%= Class %><%%= isTemplate ? 'Template' : 'Page' %>({ data: query }: { data: <%%= Class %>Query }){
  const { prismic<%%= Class %> } = usePreview(query),
    { data } = prismic<%%= Class %>;

  return !!data ? (
    <>
      <Meta  title={data.meta_title} description={data.meta_description} />

    </>
  ) : null;
}

export const query = graphql`
  query<%%= isTemplate ? '($uid: String!)' : null %> <%%= Class %> {
    prismic<%%= Class %><%%= isTemplate ? '(uid: {eq: $uid })' : null %> {
      data {
        meta_title
        meta_description
      }
    }
  }
`
