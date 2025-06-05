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
			// Disable expensive type-checking rules that OXLint handles
			'@typescript-eslint/no-unused-vars': 'off', // OXLint handles this
			'@typescript-eslint/no-explicit-any': 'off', // OXLint handles this
			'react-hooks/react-compiler': 'warn',
		},
	},
	...oxlint.buildFromOxlintConfigFile('./.oxlintrc.json'),
)
