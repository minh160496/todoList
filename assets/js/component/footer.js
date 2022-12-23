import htmls from "../core.js";
import { connect } from "../store.js";

function footer({ todoList, filter, filters }) {
  return htmls`
              <footer class="footer">
                <span class="todo-count">
                <strong>
                    ${todoList.filter(filters.active).length}
                </strong> item left</span>
                <ul class="filters">
                ${Object.keys(filters).map(
                  (filterItem, index) => htmls`
                
                <li>
                    <a class="${
                      filter === filterItem[0] + filterItem.slice(1) &&
                      "selected"
                    }" 
                      href="#/" onclick="dispatch('fil', '${
                        filterItem[0] + filterItem.slice(1)
                      }')">${filterItem[0] + filterItem.slice(1)}</a>
                </li>
                
                `
                )}
                    
                </ul>
                <button class="clear-completed" onclick="dispatch('clearComp')">Clear completed</button>
              </footer>
    `;
}

export default connect()(footer);
