module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'prettier',
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: [
        'react',
        'eslint-plugin-i18next',
        'react-hooks'
    ],
    rules: {
        indent: [2, 4],
        '@typescript-eslint/indent': [2, 4],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-function-return-type': [1],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        'no-unused-vars': [1],
        '@typescript-eslint/no-unused-vars': [1],
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true
            }
        ],
        '@typescript-eslint/consistent-type-assertions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error'
    }
}
