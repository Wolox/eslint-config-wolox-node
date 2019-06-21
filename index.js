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
  plugins: ["import"],
  globals: {
    __DEV__: true
  },
  rules: {
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "camelcase": 0,
    "max-len": ["error", { code: 100 }],
    "max-nested-callbacks": 0,
    "max-params": ["error", 4],
    "no-magic-numbers": 0,
    "curly": ["error", "multi"],
    "global-require": "error",
    "one-var": ["error", "never"],
    "import/order": ["error", { groups: [["builtin", "external", "internal"]] }],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"]
      }
    }
  }
};

