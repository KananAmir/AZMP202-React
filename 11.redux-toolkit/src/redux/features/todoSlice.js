import { createSlice } from "@reduxjs/toolkit";

const setTodosToLocaleStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
const getTodosFromLocalStorage = () => {
  const storedTodos = localStorage.getItem("todos");

  if (storedTodos) {
    return JSON.parse(storedTodos);
  }

  localStorage.setItem("todos", JSON.stringify([]));
  return [];
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: getTodosFromLocalStorage(),
    filter: "all",
    searchQuery: "",
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        isCompleted: false,
        createdAt: new Date().toLocaleDateString(),
      };
      state.items.push(newTodo);
      setTodosToLocaleStorage(state.items);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
        setTodosToLocaleStorage(state.items);
      }
    },
    deleteTodo: (state, action) => {
      console.log(action);
      state.items = [
        ...state.items.filter((todo) => todo.id !== action.payload),
      ];
      setTodosToLocaleStorage(state.items);
    },
    clearAllTodos: (state) => {
      state.items = [];
      setTodosToLocaleStorage(state.items);
    },
    setFilterValue: (state, action) => {
      state.filter = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  setFilterValue,
  setSearchQuery,
  clearAllTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
