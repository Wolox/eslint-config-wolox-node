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
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/
  plugins: ["import"],
  globals: {
    __DEV__: true
  },
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "camelcase": 0,
    "curly": ["error", "multi"],
    "global-require": "error",
    "import/order": ["error", { groups: [["builtin", "external", "internal"]] }],
    "import/named": "error",
    "import/no-duplicates": "error",
    "import/newline-after-import": "error",
    "import/no-cycle": ["error", { maxDepth: Infinity }],
    "import/no-useless-path-segments": "error",
    "max-len": ["error", { code: 100 }],
    "max-nested-callbacks": 0,
    "max-params": ["error", 4],
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

