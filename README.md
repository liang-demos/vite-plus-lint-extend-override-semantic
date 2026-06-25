Please take a look at [vite.config.ts](./vite.config.ts), and it is the result of `vp check`.

We do not repeat all the lint rules / plugins but we still get `no-console` for vue files, means `overrides` was merged with the base config.

```log
1 % vp check --fix
VITE+ - The Unified Toolchain for the Web

error: Lint issues found
× eslint(no-console): Unexpected console statement.
   ╭─[src/example.js:1:1]
 1 │ console.log();
   · ───────────
   ╰────
  help: Delete this console statement.

  × eslint(no-console): Unexpected console statement.
   ╭─[src/example.vue:6:1]
 5 │ <script lang="ts" setup>
 6 │ console.log();
   · ───────────
 7 │ 
   ╰────
  help: Delete this console statement.

  × vue(no-export-in-script-setup): <script setup>` cannot contain ES module exports.
   ╭─[src/example.vue:8:16]
 7 │ 
 8 │ export default {};
   ·                ──
 9 │ </script>
   ╰────

  × vue(no-export-in-script-setup): <script setup>` cannot contain ES module exports.
   ╭─[src/example.vue:8:8]
 7 │ 
 8 │ export default {};
   ·        ───────
 9 │ </script>
   ╰────

Found 4 errors and 0 warnings in 3 files (87ms, 15 threads)
pass: Formatting completed for checked files (425ms)
```
