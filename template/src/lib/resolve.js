function resolveDocument({ type, uid, isBroken = false }) {
  if (isBroken || !type) {
    return null;
  }

  switch (type) {
    case 'home':
      return '/';
    default:
      return `/${uid}`;
  }
}

module.exports = {
  resolveDocument
};
