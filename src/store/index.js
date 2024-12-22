import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todo-slice";
import authReducer from "./auth/auth-slice";

const store = configureStore({
  reducer: {
    todoReducer,
    authReducer,
  },
});

export default store;
