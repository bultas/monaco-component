Simple build of Monaco Editor

https://github.com/microsoft/monaco-editor


## Why?
Because Monaco Editor source has [invalid ESM modules](https://github.com/microsoft/monaco-editor/issues/886), large list of dependencies and complex bundler setup.

If you don't want to have more complex JS build process, add lot of extra lines to the bundler config or npm install plugins like [webpack-monaco-loader-plugin](https://github.com/microsoft/monaco-editor/tree/main/webpack-plugin) or [css-loader](https://webpack.js.org/loaders/css-loader/) etc.

Build it outside of you project.


## How?

### `npm run build` 
Will create dist files of Editor in `/dist` folder

## Usage
Just import final bundle (from "/dist") as ES Module in your project.. 

```html
<script type="module">
  import {editor} from "./monaco/index.js";

  editor.create(document.getElementById("container"), {
    value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join("\n"),
    language: "javascript",
    minimap: {
      enabled: false,
    },
  });
</script>
```
