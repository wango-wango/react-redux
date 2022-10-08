import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoSlice";

// store 專門拿來存放 reducer 的
export default configureStore({
    reducer: {
        todoList: todoReducer,
    },
});
