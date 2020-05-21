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
    icon: './static/icon.png',
    display: 'minimal-ui',
    include_favicon: false
  },
  seo: {
    titleTemplate: '%s ~ <%= name %>',
    language: 'en',
    openGraph: {
      type: 'website',
      locale: 'en_NZ',
      site_name: '<%= name %>'
    },
    additionalMetaTags: [
			{ name: 'rating', content: 'general' },
      { property: 'author', content: '<%= author %>' }
    ]
  },
<% if (source === 'prismic') { -%>
  prismic: {
    repositoryName: '<%= prismic %>',
    linkResolver: () => resolveDocument,
    schemas: {
      // home: require('./schemas/home.json')
    }
  },
<% } -%>
<% if (source === 'mdx') { -%>
  <%= content%>: {
    name: '<%= content %>',
    path: `${__dirname}<%= contentPath %>/`
  },
<% } -%>
  typeGen: {
    outputPath: `./types/gatsby.d.ts`,
    emitSchema: {
      './schemas/_generated/gatsby.json': true
    },
    emitPluginDocuments: {
      './schemas/_generated/gatsby.graphql': true
    }
  },
  layout: {
    component: require.resolve(`./src/containers/App/index.tsx`)
  },
  polyfill: {
    features: ['IntersectionObserver'],
  },
  nprogress: {
    color: '<%= brandColor %>',
    showSpinner: false
  },
  preconnect: {
    domains: ['https://cdn.polyfill.io'<%- source === 'prismic' ? `, 'https://images.prismic.io'` : '' %><%- components.includes('video') ? `, 'https://vimeo.com', 'https://player.vimeo.com'` : '' %>]
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
      resolve: 'gatsby-plugin-typegen',
      options: CONFIG.typeGen
    },
<% if (source === 'prismic') { -%>
    {
      resolve: 'gatsby-source-prismic',
      options: CONFIG.prismic
    },
<% } -%>
<% if (source === 'mdx') { -%>
    {
      resolve: 'gatsby-source-filesystem',
      options: CONFIG.<%= content %>,
    },
    'gatsby-plugin-mdx',
<% } -%>
    {
      resolve: 'gatsby-plugin-layout',
      options: CONFIG.layout
    },
    'gatsby-plugin-react-helmet-async',
    {
      resolve: 'gatsby-plugin-next-seo',
      options: CONFIG.seo
    },
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: CONFIG.nprogress
    },
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: CONFIG.polyfill
    },
    'gatsby-plugin-sri',
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
