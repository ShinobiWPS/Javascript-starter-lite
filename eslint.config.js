// eslint.config.js
import antfu from '@antfu/eslint-config'

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
)
