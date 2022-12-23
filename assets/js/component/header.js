import htmls from "../core.js";
import { connect } from "../store.js";

function header(plugs) {
  return htmls`
            <header class="header">
                <h1>Vợ Ú</h1>
                <input 
                class="new-todo" placeholder="What needs to be done?" autofocus
                onkeyup ="event.keyCode === 13 && this.value.trim()!=='' && dispatch('add', this.value.trim())"
                >
            </header>
    `;
}

export default connect()(header);
