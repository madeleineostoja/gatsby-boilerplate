<% if (source === 'prismic') { -%>
const { resolveDocument } = require('./src/lib/resolve');

<% } -%>
const CONFIG = {
  metadata: {
    siteUrl: '<%= url %>'
  },
  manifest: {
    name: '<%= name %>',
    short_name: '<%= name %>',
    background_color: '#fff',
    theme_color: '<%= brandColor %>',
    icon: './src/assets/img/icon.png',
    display: 'minimal-ui',
    include_favicon: false
  },
<% if (source === 'prismic') { -%>
  prismic: {
    repositoryName: '<%= prismic %>',
    linkResolver: () => resolveDocument,
    schemas: {}
  },
<% } -%>
  typeGen: {
    fileName: `./types/queries.d.ts`,
    documentPaths: ['./src/**/*.{ts,tsx}', './.cache/fragments/*.js'],
  },
  layout: {
    component: require.resolve(`./src/containers/App/index.tsx`)
  },
  polyfill: {
    features: ['IntersectionObserver'],
  },
  svgr: {
    icon: false
  },
  nprogress: {
    color: '<%= brandColor %>',
    showSpinner: false
  },
  preconnect: {
    domains: ['https://cdn.polyfill.io'<%- source === 'prismic' ? `,'https://images.prismic.io'` : '' %><%- components.includes('video') ? `'https://vimeo.com', 'https://player.vimeo.com'` : '' %>]
  },
  robots: {
    policy: [{ userAgent: '*', allow: '/' }]
  },
  notify: {
    excludeWarnings: true
  }
};

module.exports = {
  siteMetadata: CONFIG.metadata,
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: CONFIG.typeGen,
    },
<% if (source === 'prismic') { -%>
    {
      resolve: 'gatsby-source-prismic',
      options: CONFIG.prismic
    },
<% } -%>
    {
      resolve: 'gatsby-plugin-layout',
      options: CONFIG.layout
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-svgr',
      options: CONFIG.svgr
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: CONFIG.nprogress
    },
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: CONFIG.polyfill
    },
    'gatsby-plugin-sitemap',
    {
      options: CONFIG.robots,
      resolve: 'gatsby-plugin-robots-txt'
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: CONFIG.preconnect
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: CONFIG.manifest
    },
    // Offline must be called after manifest
    'gatsby-plugin-offline',
    // Netlify must be called after building
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-notify',
      options: CONFIG.notify
    }
  ]
};
