module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "jest": true,
        "jest/globals": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
        {
            "files": ["tests/**"],
            "plugins": ["jest"],
            "extends": [
                "plugin:jest/recommended",
                "plugin:jest/style"
            ],
            "rules": {
                "jest/no-disabled-tests": "warn",
                "jest/no-focused-tests": "error",
                "jest/no-identical-title": "error",
                "jest/prefer-to-have-length": "warn",
                "jest/valid-expect": "error",
                "jest/prefer-expect-assertions": "off"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "globals": {
        "UIkit": "readonly"
    },
    "plugins": [],
    "settings": {
        "jest": {
            version: require('jest/package.json').version,
        }
    },
    "rules": {}
}
