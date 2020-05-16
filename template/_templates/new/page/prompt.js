module.exports = [
  {
    type: 'input',
    name: 'type',
    message: <%= source === 'prismic' ? 'Prismic type' : 'Page UID' %>
  },
  {
    type: 'confirm',
    name: 'isTemplate',
    message: 'Is this a repeatable template?',
    initial: false
  }
];
