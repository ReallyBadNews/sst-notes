/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: [
      "./tsconfig.eslint.json",
      "./packages/functions/tsconfig.json",
      "./packages/core/tsconfig.json",
    ],
    tsconfigRootDir: __dirname,
  },
  root: true,
};
