import cssnano from "cssnano";
import postcssImport from "postcss-import";
import presetEnv from "postcss-preset-env";
import postcssUrl from "postcss-url";
import { purgeCSSPlugin } from "@fullhuman/postcss-purgecss";

const pcUrl = {
  url: "copy",
  assetsPath: "fonts", // Copy all assets to this folder.
  useHash: true, // Add hash to filenames for cache-busting.
};

const purgeConfig = {
  content: ["./dist/**/*.html"],
  keyframes: true,
  fontFace: true,
  variables: true,
};

export default {
  plugins: [
    postcssImport,
    postcssUrl(pcUrl),
    presetEnv,
    purgeCSSPlugin(purgeConfig),
    // cssnano,
  ],
};
