import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: "t1", label: "go for shopping", status: "pending" },
    { id: "t2", label: "pot some plants", status: "completed" },
    { id: "t3", label: "buy new jeans", status: "pending" },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      let newTodo = {
        id: "t" + (state.todos.length + 1),
        label: action.payload, // todo label
        status: "pending",
      };
      state.todos.push(newTodo);
    },
    deleteTodo(state, action) {
      const position = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos.splice(position, 1); // payload - index
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

const todoReducer = todoSlice.reducer;

export default todoReducer;

// immer.js
