const path = require('path');

const CONFIG = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.(ts|tsx)'],
  typescript: {
    forkTsCheckerWebpackPluginOptions: {
      tsconfig: path.resolve(__dirname, '../tsconfig.json'),
      compilerOptions: {
        strict: false
      }
    }
  },
  webpack: {
    rules: [
      {
        removeMatch: '.svg',
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      }
    ]
  }
};

module.exports = {
  stories: CONFIG.stories,
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: CONFIG.typescript
    },
    '@storybook/addon-essentials',
    '@storybook/addon-docs'
  ],
  webpackFinal: async config => {
    const findRule = ext => {
      return config.module.rules.find(rule => {
        return rule.test.toString().includes(ext.replace('.', ''));
      });
    };

    // Transpile Gatsby
    config.resolve.mainFields = ['browser', 'module', 'main'];
    findRule('js').exclude = /node_modules\/(?!(gatsby)\/)/;

    // Add new rules
    CONFIG.webpack.rules.forEach(rule => {
      if (rule.removeMatch) {
        findRule(rule.removeMatch).exclude = rule.test;
        delete rule.removeMatch;
      }
      config.module.rules.push(rule);
    });

    return config;
  }
};
