import React from 'react';
import HTML from 'react-html-renderer';
import { Heading, HeadingProps } from '../Heading';
import { Link, LinkProps } from '../Link';

export type RichTextProps = {
  /** HTML content to render */
  content: string;
};

/**
 * Render HTML strings with custom components
 */
export function RichText({ content, ...props }: RichTextProps) {
  return (
    <HTML
      html={content}
      components={{
        h1: Heading,
        h2: ({ children, ...props }: HeadingProps) => (
          <Heading secondary {...props}>
            {children}
          </Heading>
        ),
        a: ({ children, ...props }: LinkProps) => (
          <Link {...props}>
            {children}
          </Link>
        )
      }}
      {...props}
    />
  );
}
