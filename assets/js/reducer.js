import storage from "./until/storage.js";

const { get, set } = storage;

const init = {
  todoList: get(),

  filter: "all",
  filters: {
    all: (todo) => true,
    completed: (todo) => todo.isComplete,
    active: (todo) => !todo.isComplete,
  },

  indexEdit: null,
  isDefault: true,
};

function actions() {
  return {
    add({ todoList }, title) {
      if (title) {
        todoList.push({ title: title, isComplete: false });
      }
      set(todoList);
      return { todoList };
    },

    toggle({ todoList }, index) {
      todoList[index].isComplete = !todoList[index].isComplete;
      set(todoList);
      return todoList;
    },

    toggleAll({ todoList }, isCompleted) {
      todoList.forEach((todo) => (todo.isComplete = isCompleted));
      set(todoList);
      return todoList;
    },

    destroy({ todoList }, index) {
      todoList.splice(index, 1);
      set(todoList);
      return todoList;
    },

    startEdit(state, index) {
      state.indexEdit = index;
      set(state.todoList);
    },

    endEdit(state, index, value) {
      if (value) {
        state.todoList[index].title = value;
        state.todoList[index].isComplete = false;
        state.indexEdit = null;
        set(state.todoList);
      } else state.indexEdit = null;
    },

    fil(state, filter) {
      if (state.todoList) {
        state.todoList = get(state.todoList); //lay lai state tu storage sau moi lan loc
        state.filter = filter;

        state.todoList = state.todoList.filter(state.filters[state.filter]);
        state.isDefault = false;
      }
    },

    clearComp(state) {
      state.todoList = state.todoList.filter(state.filters.active);
      set(state.todoList);
    },
  };
}

export default function reducer(state = init, action, ...args) {
  if (actions()[action]) actions()[action](state, ...args);
  return state;
}
