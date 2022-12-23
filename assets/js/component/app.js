import htmls from "../core.js";
import { connect } from "../store.js";
import header from "./header.js";
import main from "./main.js";
import footer from "./footer.js";

function App({ todoList, isDefault }) {
  console.log(isDefault);
  return htmls`
                ${header()}
                ${main()}
                ${footer()}
  `;
}

export default connect()(App);
