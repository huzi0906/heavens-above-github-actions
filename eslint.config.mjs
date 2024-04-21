import pluginJs from "@eslint/js";

export default {
  env: {
    browser: true,
    node: true,
  },
  globals: {
    $: "readonly", // for jQuery
  },
  files: ["**/*.js"],
  languageOptions: {
    sourceType: "module",
  },
  extends: [pluginJs.configs.recommended],
};
