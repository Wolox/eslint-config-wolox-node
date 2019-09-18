"use strict";

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 10,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  extends: ["wolox"],
  globals: {
    __DEV__: true
  },
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "camelcase": 0,
    "curly": ["error", "multi-line"],
    "global-require": "error",
    "max-nested-callbacks": 0,
    "no-magic-numbers": 0,
    "one-var": ["error", "never"]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"]
      }
    }
  }
};
