module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    '@vue/standard',
    'plugin:vue/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': 'error',
    semi: ['error', false],
    quotes: ['error', 'single']
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['prettier']
}
