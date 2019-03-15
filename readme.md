# @acutejs/plugin-lit-html

A plugin for Acute to use [lit-html](https://lit-html.polymer-project.org).

## Usage

First, install the plugin and its peer-dependency, `lit-html`.

```shell
npm install @acutejs/plugin-lit-html lit-html
```

Next, pass the plugin and a reference to `lit-html`’s `render` function to Acute’s `createApp()`.

```javascript
import litHtml from '@acutejs/plugin-lit-html';
import { render } from 'lit-html';

createApp({
  // ...
  plugins: [
    litHtml({
      render,
    }),
  ],
});
```

Finally, use `lit-html`’s `html` function to tag the template string in your components `render()` function.

```javascript
import { html } from 'lit-html';

const message = 'Hello, world';

export default {
  render() {
    return html`<p> ${message} </p>`;
  },
};
```
