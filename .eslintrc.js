modules.exports = {
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
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/stylistic',
		'plugin:import/recommended',
		'plugin:import/typescript',
		//"plugin:react/recommended"
		//"plugin:vue/recommended"
	],
	plugins: ['@typescript-eslint', 'import', '@stylistic'],
	rules: {},
	settings: {
		'import/resolver': {
			typescript: true,
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
			},
		},
	},
}
