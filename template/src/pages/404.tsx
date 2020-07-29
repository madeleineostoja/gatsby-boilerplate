import { css } from '@emotion/core';
import { withPreview, withUnpublishedPreview } from 'gatsby-source-prismic';
import flowRight from 'lodash/flowRight';
import React from 'react';
import { Meta } from '../components/Meta';

export default flowRight(withUnpublishedPreview, withPreview)(
  NotfoundPage as any,
  {
    templateMap: {}
  }
);

function NotfoundPage() {
  return (
    <>
      <Meta />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 100vh;
        `}
      >
        <h1>Not found</h1>
      </div>
    </>
  );
}
