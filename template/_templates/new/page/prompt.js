module.exports = [
<% if (source === 'prismic') { -%>
  {
    type: 'input',
    name: 'type',
    message: 'Prismic type'
  },
<% } -%>
  {
    type: 'confirm',
    name: 'isTemplate',
    message: 'Is this a repeatable template?',
    initial: false
  }
];
