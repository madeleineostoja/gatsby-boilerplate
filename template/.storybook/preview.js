import { Global } from '@emotion/core';
import { DocsContainer, Stories } from '@storybook/addon-docs/blocks';
import { addParameters, addDecorator } from '@storybook/react';
import { create } from '@storybook/theming';
import React from 'react';
import icon from '../static/icon.png';
import styles from '../src/containers/App/styles';

// Change title of stories
Stories.defaultProps = {
  title: 'Examples'
};

// Global styles
addDecorator(story => (
  <>
    <Global styles={styles} />
    {story()}
  </>
));
addParameters({
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <Global styles={styles} />
        {children}
      </DocsContainer>
    )
  }
});

// Custom theme
// Should be done in manager.js, but docs doesn't support yet
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: '<%= name %>',
      brandUrl: '<%= url %>',
      brandImage: icon,
      colorPrimary: '<%= brandColor %>',
      colorSecondary: '<%= brandColor %>'
    }),
    showRoots: true,
    viewMode: 'docs'
  }
});

// Patch Gatsby
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};
global.__PATH_PREFIX__ = '';
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};
