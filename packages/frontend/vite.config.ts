import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      serverModuleFormat: "esm",
      assetsBuildDirectory: "build/public",
      publicPath: "/build/public/",
      serverBuildDirectory: "build",
      serverBuildFile: "index.js",
    }),
    tsconfigPaths(),
  ],
});
