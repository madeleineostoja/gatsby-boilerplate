const { resolve } = require('path');

const PAGES = [
  // {
  //   query: ``,
  //   type: '',
  //   template: '',
  //   pathResolver: uid => ``
  // }
];

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  PAGES.forEach(async ({ query, type, template, pathResolver }) => {
    const { data: page } = await graphql(query);

    page[type].edges.forEach(({ node }) => {
      createPage({
        path: pathResolver(node.uid),
        component: resolve(__dirname, template),
        context: { uid: node.uid }
      });
    });
  });
};
