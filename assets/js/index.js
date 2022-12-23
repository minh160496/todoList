import { attach } from "./store.js";

import App from "./component/app.js";
const app = document.querySelector("#app");
console.log(app);

attach(App, app);
