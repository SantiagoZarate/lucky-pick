import globals from "globals";
import tseslint from "typescript-eslint";

import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

let a;

export default tseslint.config(
  {
    ignores: ["dist"],
  },
  {
    extends: "",
    files: ["**/*.{ts}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  }
);
