import del from "rollup-plugin-delete";
import { bundleTs, serve } from "@lunoxjs/build";
import json from "@rollup/plugin-json";

const production = process.env.NODE_ENV == "production";
export default [
  ...bundleTs(
    [
      "index.ts",
      "artisan.ts",
      "bootstrap/**/*.ts",
      "routes/**/*.ts",
      "config/**/*.ts",
      "database/**/*.ts",
      "app/**/*.ts",
    ],
    {
      relative: "",
      outputDir: "dist",
      beforeBuild: [del({ targets: "dist/*" }), json()],
      afterBuild: [!production && serve()],
    },
  ),
];
