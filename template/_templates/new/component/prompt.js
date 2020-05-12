function transformPropsString(props) {
  objectify = prop => {
    const description = prop.match(/\((.*)\)$/);
    let vals = prop.replace(/\(.*\)$/, '').split(':');

    return {
      name: vals[0],
      type: vals[1],
      description: !!description ? description[1] : 'No description'
    };
  };

  if (!props) {
    return;
  }

  return props
    .split(',')
    .map(propString => propString.trim())
    .map(objectify);
}

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description'
  },
  {
    type: 'input',
    name: 'props',
    message: 'Props :: [prop]:[type](description)',
    result: transformPropsString
  }
];
