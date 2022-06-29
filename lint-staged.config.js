module.exports = {
  '*.js': ['prettier --write', 'eslint --fix', 'npm run test:staged'],
};
