import {
  html,
  useEffect,
  useState
} from "https://unpkg.com/htm/preact/standalone.module.js";

export function Header({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const [packageData, setData] = useState([]);

  useEffect(() => {
    console.log("render");
    getJson().then((data) => {
      setData(data);
    });
  }, []);

  return html`
    <header>
      <h1>${title}</h1>
      <p>${packageData.name}</p>
      ${children}
    </header>
  `;
}

function getJson() {
  const axios = window.axios;
  return axios.get("package.json").then((response) => {
    console.log(response.data);
    return response.data;
  });
}
