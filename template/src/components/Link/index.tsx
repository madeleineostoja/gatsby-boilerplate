import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import React, { ReactNode, useEffect, useState } from 'react';

function isInternal(url: string) {
  const tester = document.createElement('a');

  tester.href = url;
  return !!url && tester.hostname === window.location.hostname;
}

export type LinkProps = {
  /** URL of the link */
  href?: string;
  /** Whether link should be active on child routes */
  greedyActive?: boolean;
  /** Content of the link */
  children: ReactNode;
};

/** Anchor that adapts to internal and external urls. Also has an 'active' state based on the page viewed */
export function Link({
  href = '',
  greedyActive,
  children,
  ...props
}: LinkProps) {
  const [internal, setInternal] = useState(false),
    LinkElement = internal ? GatsbyLink : 'a',
    getActiveState = ({
      isCurrent,
      isPartiallyCurrent
    }: {
      isCurrent: boolean;
      isPartiallyCurrent: boolean;
    }) => {
      const check = greedyActive ? isPartiallyCurrent : isCurrent;
      return { active: check.toString() };
    },
    hrefProp = internal ? { to: href } : { href };

  useEffect(() => {
    setInternal(isInternal(href));
  }, [href]);

  return (
    <LinkElement
      {...(!!href && hrefProp)}
      {...(internal && { getProps: getActiveState })}
      {...(!internal && { target: '_blank', rel: 'noopener noreferrer' })}
      {...(props as GatsbyLinkProps<any>)}
    >
      {children}
    </LinkElement>
  );
}
