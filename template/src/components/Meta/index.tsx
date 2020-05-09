import { Location } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { resolveUrl } from '../../lib/utils';

export type MetaProps = {
  /** Page title */
  title?: string;
  /** Page description */
  description?: string;
  /** Cover image (used for social networks) */
  cover?: string;
};

/**
 * Sets a page's <head> meta data
 */
export function Meta({ title, description, cover = 'cover.jpg' }: MetaProps) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  return (
    <Location>
      {({ location }) => {
        const { siteUrl } = site.siteMetadata,
          resolvedTitle = `${title}`,
          resolvedCover = resolveUrl(cover, siteUrl),
          resolvedLocation = `${siteUrl}${location.pathname}`;

        return (
          <Helmet>
            {/* Basic */}
            <title>{resolvedTitle}</title>
            <meta name="description" content={description} />
            <meta name="image" content={resolvedCover} />
            <link rel="alternate" hrefLang="en" href={resolvedLocation} />
            <link rel="canonical" href={resolvedLocation} />

            {/* Schema.org */}
            <meta itemProp="title" content={resolvedTitle} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content={resolvedCover} />

            {/* Facebook */}
            <meta property="og:title" content={resolvedTitle} />
            <meta property="og:site_name" content="<%= name %>" />
            <meta property="og:url" content={resolvedLocation} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={resolvedCover} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:title" content={resolvedTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={resolvedCover} />
          </Helmet>
        );
      }}
    </Location>
  );
}
