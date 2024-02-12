// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(
  {
		react: true,
		// svelte: true,
    stylistic: {
      'jsx-one-expression-per-line': 'off',
    },
    ignores: [
      '**/fixtures',
    // ...globs
    ],
  },
)
