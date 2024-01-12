rules = {
	// Possible Errors
	"valid-jsdoc": "warn",

	// Best Practices
	radix: "error",

	// Strict Mode
	strict: ["error", "global"],

	// Node.js and CommonJS

	// Stylistic Issues
	"array-bracket-spacing": "error",
	"comma-dangle": ["error", "always-multiline"],
	"comma-spacing": "error",
	"comma-style": "error",
	"eol-last": "error",
	indent: ["error", "tab"],
	"jsx-quotes": "error",
	"key-spacing": ["error", { mode: "minimum" }],
	"lines-between-class-members": ["error", "always"],
	"max-depth": ["error", 4],
	"max-len": [
		"error",
		{
			code: 80,
			ignoreUrls: true,
			ignoreStrings: true,
		},
	],
	"new-cap": ["error", { capIsNewExceptions: ["URI"] }],
	// avoid AutoSemicolonInsertion tricky cases when Semi:disabled
	"no-unexpected-multiline": "error",
	"operator-linebreak": ["error", "before"],
	quotes: ["error", "single", { avoidEscape: true }],
	// disable Semicolon
	"space-before-function-paren": ["error", "never"],
	"space-in-parens": ["error", "always"],
	"template-curly-spacing": ["error", "always"],

	// ECMAScript 5+
	"arrow-body-style": "error",
	"arrow-parens": "error",
	"arrow-spacing": "error",
	"generator-star-spacing": ["error", "after"],
	"no-var": "error",
	"prefer-arrow-callback": "error",
	"prefer-const": "error",
	"prefer-rest-params": "error",
	"prefer-spread": "error",
	"prefer-template": "error",
	"rest-spread-spacing": "error",

	// Import
	"import/first": "error",
	"import/newline-after-import": "error",
	"import/order": [
		"error",
		{
			groups: [
				"builtin",
				["external", "internal"],
				["parent", "sibling", "index"],
			],
			"newlines-between": "always",
		},
	],

	// React
	"react/jsx-boolean-value": "error",
	"react/jsx-closing-bracket-location": "error",
	"react/jsx-curly-spacing": ["error", { when: "always", children: true }],
	"react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
	"react/jsx-tag-spacing": "error",
	"react/jsx-wrap-multilines": "error",
	"react/self-closing-comp": "error",
};
