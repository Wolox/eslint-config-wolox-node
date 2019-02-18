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
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ['error', { before: true, after: true }],
    "camelcase": 0,
    "max-len": ["error", { "code": 120 }],
    "max-nested-callbacks": 0,
    "max-params": ["error", 4],
    "no-magic-numbers": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"]
      }
    }
  }
};

