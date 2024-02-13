/** @type {import('eslint').Linter.FlatConfig[]} */
import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

import JsxA11y from 'eslint-plugin-jsx-a11y'

export default antfu(

  {
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
    react: true,
    // svelte: true,
    // unocss: true,
    stylistic: {
      'jsx-one-expression-per-line': 'off',
    },
    ignores: [
      '**/fixtures',
    ],
  },

  {
    files: ['**/*.{js,ts,tsx,jsx}'],
    plugins: {
      JsxA11y,
      tailwind,
    },
    rules: { },
  },
)
