import { defineConfig } from "eslint/config";
import globals from "globals";
import security from "eslint-plugin-security";

export default defineConfig([
  {
    files: ["**/*.js", "**/*.mjs"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.mocha,
      },
    },

    plugins: {
      security,
    },

    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",

      "security/detect-eval-with-expression": "error",
      "security/detect-non-literal-require": "warn",
      "security/detect-object-injection": "warn",
    },
  },
]);