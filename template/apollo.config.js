module.exports = {
  client: {
    name: 'kerbly',
    tagName: 'graphql',
    includes: ['./src/**/*.{ts,tsx}', './schemas/_generated/gatsby.graphql'],
    service: {
      name: 'GatsbyJS',
      localSchemaFile: './schemas/_generated/gatsby.json'
    }
  }
};
