import htmls from "../core.js";
import { connect } from "../store.js";

function todoListComp({ todoList, indexEdit }) {
  return htmls`    
                    <ul class="todo-list">
                    ${htmls`
                    ${todoList.map(
                      (todoItem, index) => htmls`
                    <li class="${
                      todoItem && todoItem.isComplete && "completed"
                    } ${index === indexEdit && "editing"}">
                        <div class="view view-${index}">
                            <input 
                            
                            class="toggle" 
                            type="checkbox" 
                            onchange="dispatch('toggle',${index})"
                            ${todoItem && todoItem.isComplete && "checked"}
                            >
                            <label ondblclick="dispatch('startEdit', ${index}, this.innerContent)">
                              ${todoItem && todoItem.title}
                            </label>      
                            <button 
                            class="destroy"
                            onclick="dispatch('destroy', ${index})"
                            ></button>
                            <input class="edit"  onkeyup="event.keyCode===13 && dispatch('endEdit',${index}, this.value)">
                        </div>
                        
                    </li>
                        `
                    )}`}
                    </ul>
    `;
}

export default connect()(todoListComp);
