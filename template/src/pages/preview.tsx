import {
  withPreviewResolver,
  WithPreviewResolverProps
} from 'gatsby-source-prismic';
import React, { useState } from 'react';
import { resolveDocument } from '../lib/resolve';

declare global {
  interface Window {
    __PRISMIC_PREVIEW_DATA__: any;
  }
}

export default withPreviewResolver(PreviewPage as any, {
  repositoryName: 'karimjoreige',
  linkResolver: (): any => resolveDocument
});
function PreviewPage({ isPreview }: WithPreviewResolverProps) {
  const [message, setMessage] = useState('Loading preview...');
  if (isPreview === false) {
    setMessage(`Can't find preview`);
  }

  return (
    <div style={{ alignSelf: 'center', justifySelf: 'center' }}>{message}</div>
  );
}
