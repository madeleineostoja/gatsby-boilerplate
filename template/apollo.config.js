module.exports = {
  client: {
    name: '<%= name %>',
    tagName: 'graphql',
    includes: ['./src/**/*.{ts,tsx}', './schemas/_generated/gatsby.graphql'],
    service: {
      name: 'GatsbyJS',
      localSchemaFile: './schemas/_generated/gatsby.json'
    }
  }
};
