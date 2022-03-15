import { editor } from "./monaco/index.js";

const EDITOR_ID = "editor";

editor.create(document.getElementById(EDITOR_ID), {
  value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join("\n"),
  language: "javascript",
  minimap: {
    enabled: false,
  },
});
