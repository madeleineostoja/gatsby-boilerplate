import React from 'react';
import HTML from 'react-html-renderer';
import { link } from '../../lib/css';
import { Heading } from '../Heading';
import { Link } from '../Link';

export type RichTextProps = {
  /** HTML content to render */
  content: string;
};

type ElementProps = {
  children: any;
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
        h2: ({ children, ...props }: ElementProps) => (
          <Heading secondary {...props}>
            {children}
          </Heading>
        ),
        a: ({ children, ...props }: ElementProps) => (
          <Link css={link} {...props}>
            {children}
          </Link>
        )
      }}
      {...props}
    />
  );
}
