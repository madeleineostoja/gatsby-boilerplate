---
to: "src/<%%= isTemplate ? 'templates' : 'pages' %%>/<%%= type %>.tsx"
---
<%% Class = h.inflection.classify(type) -%%>
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
<% if (source === 'prismic') { -%>
import { withPreview } from 'gatsby-source-prismic';
<% } -%>
import React from 'react';
import { Meta } from '../components/Meta';

<% if (source === 'prismic') { -%>
export default withPreview(<%%= Class %%><%%= isTemplate ? 'Template' : 'Page' %%> as any);
<% } -%>
<% if (source !== 'prismic') { %>export default <% } -%>function <%%= Class %%><%%= isTemplate ? 'Template' : 'Page' %%>({ data: query }: { data: GatsbyTypes.<%%= Class %%>Query } ){
<% if (source === 'prismic') { -%>
  const { prismic<%%= Class %%> } = { data } = query.prismic<%%= Class %%>!;

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
  query <%%= Class %%><%%= isTemplate ? '($uid: String!)' : '' %%> {
    prismic<%%= Class %%><%%= isTemplate ? '(uid: {eq: $uid })' : '' %%> {
      data {
        meta_title
        meta_description
      }
    }
  }
`
