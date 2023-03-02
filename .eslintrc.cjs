/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    // 单引号限制
    quotes: ['error', 'single']
    // 禁用console
    // 'no-console': 'error'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
