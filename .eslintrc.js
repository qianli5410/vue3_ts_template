module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier', '@vue/typescript'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {},
};
