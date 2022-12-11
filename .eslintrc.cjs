module.exports = {
	env: {
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'@vue/airbnb',
		'prettier'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
		'vue/no-deprecated-slot-attribute': 'off',
		'import/prefer-default-export': 'off',
		'import/extensions': [
			2,
			{
				js: 'never',
				vue: 'always',
			}
		],
		'vue/multi-word-component-names': [
			'error',
			{
				ignores: ['Index', 'Home', 'About']
			}
		]
	},
	parserOptions: {
		ecmaVersion: 'latest'
	}
};