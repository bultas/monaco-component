const esbuild = require("esbuild");
const path = require("path");

const workerEntryPoints = [
  "vs/language/json/json.worker.js",
  "vs/language/css/css.worker.js",
  "vs/language/html/html.worker.js",
  "vs/language/typescript/ts.worker.js",
  "vs/editor/editor.worker.js",
];

build({
  entryPoints: workerEntryPoints.map(
    (entry) => `./node_modules/monaco-editor/esm/${entry}`
  ),
  bundle: true,
  format: "iife",
  outbase: "./node_modules/monaco-editor/esm/",
  outdir: path.join(__dirname, "dist", "monaco"),
});

build({
  entryPoints: ["index.js"],
  bundle: true,
  format: "iife",
  outdir: path.join(__dirname, "dist", "monaco"),
  loader: {
    ".ttf": "file",
  },
});

/**
 * @param {import ('esbuild').BuildOptions} opts
 */
function build(opts) {
  esbuild.build(opts).then((result) => {
    if (result.errors.length > 0) {
      console.error(result.errors);
    }
    if (result.warnings.length > 0) {
      console.error(result.warnings);
    }
  });
}
