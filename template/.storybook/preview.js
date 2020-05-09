import { Stories } from '@storybook/addon-docs/blocks';
import { addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import icon from '../src/assets/img/icon.png';
import '../src/containers/App/styles';

// Change title of stories
Stories.defaultProps = {
  title: 'Examples'
};

// Custom theme
//Should be done in manager.js, but docs doesn't support yet
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: '<%= name %>',
      brandUrl: '<%= url %>',
      brandImage: icon,
      colorPrimary: '<%= brandColor %>',
      colorSecondary: '#<%= brandColor %>'
    }),
    showRoots: true
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
