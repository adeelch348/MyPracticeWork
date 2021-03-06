module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-console": "off",
    "no-plusplus": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "func-names": "off",
    "consistent-return": "off",
  },
};
