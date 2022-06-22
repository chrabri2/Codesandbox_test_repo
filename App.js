import {
  html,
  render
} from "https://unpkg.com/htm/preact/standalone.module.js";

// TODO: import header
import { Header } from "./Header.js";

function App() {
  return html`
    <${Header} title="This is my starter">
      An example react starter without webpack and Babel
    </${Header}>

    <div>
      Contents of the page
    </div>
  `;
}

render(html` <${App} /> `, document.getElementById("app"));
