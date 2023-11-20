import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import glob from "glob";
import {
  injectReactImportIfNeeded,
  replaceRequireWithImport,
  transformStylesPlugin,
} from "./vite-plugin";
import svgr from "vite-plugin-svgr";

import legacy from "@vitejs/plugin-legacy";

const scssVariablesFiles = glob.sync(
  path.resolve(
    __dirname,
    "../service-ui/app/src/common/css/variables/**/*.scss"
  )
);
// join all scss files into one string
const scssVariables = scssVariablesFiles
  .map((file) => `@import "${file}";`)
  .join("\n");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    transformStylesPlugin(),
    injectReactImportIfNeeded(),
    replaceRequireWithImport(),
    svgr(),

    // legacy({
    //   targets: ["defaults", "not IE 11"],
    // }),
    react({
      // jsxRuntime: "classic",
      babel: {
        presets: [
          // ["@babel/preset-react", { runtime: "automatic" }],
          // ["@babel/preset-env", { targets: { node: "current" } }],
        ],
        plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
        parserOpts: {
          plugins: [
            // [
            //   "decorators",
            //   {
            //     decoratorsBeforeExport: true,
            //     allowCallParenthesized: true,
            //     version: "2023-05",
            //   },
            // ],
            // "classProperties",
            // "decorators-legacy",
          ],
        },
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: scssVariables,
        quietDeps: true,
      },
    },
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "../service-ui/app/src/components"),
      componentLibrary: path.resolve(
        __dirname,
        "../service-ui/app/src/componentLibrary"
      ),
      controllers: path.resolve(__dirname, "../service-ui/app/src/controllers"),
      common: path.resolve(__dirname, "../service-ui/app/src/common"),
      pages: path.resolve(__dirname, "../service-ui/app/src/pages"),
      store: path.resolve(__dirname, "../service-ui/app/src/store"),
      routes: path.resolve(__dirname, "../service-ui/app/src/routes"),
      layouts: path.resolve(__dirname, "../service-ui/app/src/layouts"),
    },
  },
});
