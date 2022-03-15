import { editor } from "./monaco/index.js";

const INIT_VALUE = "";
const EDITOR_ID = "editor";
const PLACEHOLDER_SELECTOR = ".monaco-placeholder";

const instance = editor.create(document.getElementById(EDITOR_ID), {
  value: INIT_VALUE,
  language: "javascript",
  minimap: {
    enabled: false,
  },
});

showPlaceholder(INIT_VALUE);

instance.onDidBlurEditorWidget(() => {
  showPlaceholder(instance.getValue());
});

instance.onDidFocusEditorWidget(() => {
  hidePlaceholder();
});

function showPlaceholder(value) {
  if (value === "") {
    document.querySelector(PLACEHOLDER_SELECTOR).style.display = "initial";
  }
}

function hidePlaceholder() {
  document.querySelector(PLACEHOLDER_SELECTOR).style.display = "none";
}
