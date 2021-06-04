const prettierRules = {
    singleQuote: true,
    semi: false,
    useTabs: false,
    tabWidth: 4,
    trailingComma: 'all',
    printWidth: 80,
    bracketSpacing: true,
    arrowParens: 'avoid',
    endOfLine: 'auto',
}

const config = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error', prettierRules],
    },
}

module.exports = {
    config,
    prettierRules,
}
