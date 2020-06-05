import { navigate, PageProps } from 'gatsby';
import { usePrismicPreview } from 'gatsby-source-prismic';
import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    __PRISMIC_PREVIEW_DATA__: any;
  }
}

// Location prop needs to exist in scope for preview hook
export default function PreviewPage({ location }: PageProps) {
  const [message, setMessage] = useState('Loading preview...'),
    { isPreview, previewData, path } = usePrismicPreview({
      repositoryName: '<%= prismic %>'
    });

  useEffect(() => {
    if (isPreview === false || !previewData) {
      return;
    }

    window.__PRISMIC_PREVIEW_DATA__ = previewData;
    navigate(path || '/');
  }, [isPreview, previewData, path]);

  if (isPreview === false) {
    setMessage(`Can't find preview`);
  }

  return (
    <div style={{ alignSelf: 'center', justifySelf: 'center' }}>{message}</div>
  );
}
