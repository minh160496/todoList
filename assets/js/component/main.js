import htmls from "../core.js";
import { connect } from "../store.js";
import todoListComp from "./todo_list.js";

function main({ todoList, filter, filters }) {
  return htmls`
                <section class="main">
                    <input id="toggle-all" class="toggle-all" type="checkbox" 
                    onchange="dispatch('toggleAll',this.checked)"
                    ${todoList.every(filters.completed) && "checked"}
                    
                    >
                    <label for="toggle-all">Mark all as complete</label>
                   ${todoListComp()}
                </section>
    `;
}
export default connect()(main);
