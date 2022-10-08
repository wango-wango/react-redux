import { createSlice } from "@reduxjs/toolkit";
import { todoData } from "../todoData";

export const todoSlice = createSlice({
    // 對應 reducer 的名稱
    name: "todoList",
    // initialState -> 初始狀態
    initialState: { value: todoData },
    // 用來對 users 這個 reducers 做的 action 的 function
    reducers: {
        addTodoList: (state, action) => {
            // adding a list
            state.value.push(action.payload);
        },
        updateTodoList: (state, action) => {
            //update list
            state.value.map((v) => {
                if (v.id === action.payload.id) {
                    v.todo = action.payload.todo;
                }
                return state;
            });
        },
        deleteTodoList: (state, action) => {
            // delete user by id
            state.value = state.value.filter((v) => v.id !== action.payload.id);
        },
    },
});
export const { addTodoList, updateTodoList, deleteTodoList } =
    todoSlice.actions;
export default todoSlice.reducer;
