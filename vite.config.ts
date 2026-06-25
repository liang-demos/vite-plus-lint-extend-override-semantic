import { defineConfig } from "vite-plus";

export default defineConfig({
  lint: {
    // `extends` already works, though it cannot specific files.
    extends: [
      {
        rules: {
          "no-console": "error",
        },
      },
    ],
    plugins: ["unicorn", "eslint"],
    overrides: [
      {
        files: ["**/*.vue"],
        // I didn't copy all the plugins,, but `no-console` is still working
        // `overrides` use `merge semantic there`
        plugins: ["vue"],
        rules: {
          "vue/no-export-in-script-setup": "error",
        },
      },
    ],
  },
});
