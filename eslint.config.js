import js from "@eslint/js";
import globals from "globals";
import eslintPluginYml from 'eslint-plugin-yml';
import pluginJest from 'eslint-plugin-jest';

export default [
    js.configs.recommended, // Recommended config applied to all files
    {
        //Settings for source files
        files: [
            "src/**/*.js",
        ],
        plugins: {},

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                UIkit: "readonly",
            },

            ecmaVersion: 2015,
            sourceType: "script",
        },

        settings: {},
        rules: {},
    },
    {
        // Settings for Jest files
        files: [
            "tests/*.js",
            "jest.environment.js",
            "jest.setup.js",
        ],
        plugins: {
            "jest": pluginJest
        },
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,
                ...globals.browser,
                ...pluginJest.environments.globals.globals,
            },
        },
    },
    {
        // Settings for configuration files
        files: [
            "*.js",
        ],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,
            },
        },
    },
    {
        ignores: [
            "src/**/*.min.js",
        ],
    },
    ...eslintPluginYml.configs['flat/recommended']
];
