import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  minify: true,
  entry: ["./src/index.ts"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true
})