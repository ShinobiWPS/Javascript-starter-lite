import react from '@eslint-react/eslint-plugin'
import js from '@eslint/js'
import pluginQuery from '@tanstack/eslint-plugin-query'
import pluginRouter from '@tanstack/eslint-plugin-router'
import oxlint from 'eslint-plugin-oxlint'
import * as reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	{
		ignores: [
			'dist',
			'.vinxi',
			'.wrangler',
			'.vercel',
			'.netlify',
			'.output',
			'build/',
			'node_modules/',
			'**/*.gen.ts',
			'**/routeTree.gen.ts',
		],
	},
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			...pluginQuery.configs['flat/recommended'],
			...pluginRouter.configs['flat/recommended'],
		],
	},
	reactHooks.configs.recommended,
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
				project: './tsconfig.json',
				tsconfigRootDir: import.meta.dirname,
				// Add these performance optimizations
				createDefaultProgram: false,
				warnOnUnsupportedTypeScriptVersion: false,
			},
		},
		...react.configs['recommended-type-checked'],
	},
	{
		rules: {
			// Turn off rules that OXlint handles better/faster
			'no-debugger': 'off',
			'no-unused-vars': 'off',
			'no-useless-escape': 'off',
			'no-extra-boolean-cast': 'off',
			'no-unsafe-finally': 'off',
			'no-unsafe-negation': 'off',
			'no-cond-assign': 'off',
			'no-const-assign': 'off',
			'no-dupe-keys': 'off',
			'no-duplicate-case': 'off',
			'no-empty-character-class': 'off',
			'no-func-assign': 'off',
			'no-invalid-regexp': 'off',
			'use-isnan': 'off',
			'valid-typeof': 'off',

			// TypeScript rules covered by OXlint
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-duplicate-enum-values': 'off',
			'@typescript-eslint/no-extra-non-null-assertion': 'off',
			'@typescript-eslint/prefer-as-const': 'off',

			// React rules covered by OXlint
			'react/jsx-key': 'off',
			'react/jsx-no-duplicate-props': 'off',
			'react/jsx-no-undef': 'off',
			'react/no-children-prop': 'off',
			'react/no-direct-mutation-state': 'off',
			'react/no-find-dom-node': 'off',
			'react/no-string-refs': 'off',
			'react/void-dom-elements-no-children': 'off',
			'react-hooks/react-compiler': 'warn',
		},
	},
	...oxlint.buildFromOxlintConfigFile('./.oxlintrc.json'),
)
