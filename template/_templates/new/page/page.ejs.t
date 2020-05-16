---
to: "src/<%%= isTemplate ? 'templates' : 'pages' %%>/<%%= type %%>.tsx"
---
<%% Class = h.inflection.classify(type) -%%>
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import React from 'react';
import { Meta } from '../components/Meta';
<% if (source === 'prismic') { -%>
import { usePreview } from '../lib/hooks';
<% } -%>

export default function <%%= Class %%><%%= isTemplate ? 'Template' : 'Page' %%>({ data: query }: GatsbyTypes.<% if (source === 'prismic') { %>Prismic<%%= Class %%><% } %> ){
<% if (source === 'prismic') { -%>
  const { prismic<%%= Class %%> } = usePreview(query),
    { data } = prismic<%%= Class %%>;

  if (!data) {
    return null;
  }
<% } -%>

  return (
    <>
      <Meta title={data.meta_title} description={data.meta_description} />
    </>
  );
}

export const query = graphql`
<% if (source === 'prismic') { -%>
  query <%%= Class %%><%%= isTemplate ? '($uid: String!)' : '' %%> {
    prismic<%%= Class %%><%%= isTemplate ? '(uid: {eq: $uid })' : '' %%> {
      data {
        meta_title
        meta_description
      }
    }
  }
<% } else { -%>
  query <%%= Class %%> {

  }
<% } -%>
`
