const TODO_STORAGE_KEY = "TODO";
const storage = {
  get() {
    return JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || [];
  },

  set(todo) {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todo));
  },
};

export default storage;
