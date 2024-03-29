module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended', // adds some MORE rules by default
    'plugin:@stylistic/all-extends',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:react/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    '@stylistic',
  ],
  rules: {
    '@stylistic/indent': [
      'error',
      'tab',
    ],
    '@stylistic/quotes': [
      'error',
      'single',
    ],
    '@stylistic/semi': [
      'error',
      'never',
    ],
    '@stylistic/quote-props': [
      'error',
      'as-needed',
    ],
    '@stylistic/object-curly-spacing': [
      'error',
      'always',
    ],
    '@stylistic/comma-dangle': [
      'error',
      'always',
    ],
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
}
