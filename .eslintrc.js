module.exports = {
    "env": {
        "es2021": true,
        "node": true,
        "browser": true,
        "react-native/react-native": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "tsx": true
        }
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-native"
    ],
    "rules": {
    }
}
