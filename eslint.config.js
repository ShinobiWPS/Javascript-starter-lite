/** @type {import('eslint').Linter.FlatConfig[]} */
import antfu from '@antfu/eslint-config'

// import JsxA11y from 'eslint-plugin-jsx-a11y'

export default antfu(
  {
    typescript: true,
    react: true,
    // svelte: true,
    // vue: true,
    stylistic: {
      'jsx-one-expression-per-line': 'off',
    },
    ignores: [
      '**/fixtures',
    // ...globs
    ],
  },
  // JsxA11y,
  { rules: { 'accessible-emoji': 'off' } },
)
