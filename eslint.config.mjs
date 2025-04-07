import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
    {
        files: ['**/*.ts'],
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
            import: importPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            ...prettierConfig.rules,
        },
        languageOptions: {
            parser: typescriptEslintParser, // Use the imported parser object
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/build/**',
            '**/out/**',
            '**/coverage/**',
            '**/.history/**',
        ],
    },
];
