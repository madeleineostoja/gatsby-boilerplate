import { Location } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React from 'react';
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
export function Meta({
  title,
  description,
  cover = 'cover.jpg',
  ...props
}: MetaProps) {
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
          resolvedCover = resolveUrl(cover, siteUrl),
          resolvedLocation = `${siteUrl}${location.pathname}`;

        return (
          <GatsbySeo
            title={title}
            description={description}
            canonical={resolvedLocation}
            openGraph={{
              url: resolvedLocation,
              title,
              description,
              images: [{ url: resolvedCover }]
            }}
            {...props}
          />
        );
      }}
    </Location>
  );
}
