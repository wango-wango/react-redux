import { createSlice } from "@reduxjs/toolkit";
import { todoData } from "./data/todoData";

export const todoSlice = createSlice({
    // 對應 reducer 的名稱
    name: "todoList",
    // initialState -> 初始狀態
    initialState: {
        value: todoData,
        selectedId: todoData[0].id,
    },
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
                    if (action.payload.todo !== "")
                        v.todo = action.payload.todo;
                    if (action.payload.workingTime !== 0)
                        v.workingTime = action.payload.workingTime;
                    if (action.payload.breakTime !== 0)
                        v.breakTime = action.payload.breakTime;
                }
                return state;
            });
        },
        deleteTodoList: (state, action) => {
            // delete user by id
            state.value = state.value.filter((v) => v.id !== action.payload.id);
        },
        selectTodoList: (state, action) => {
            state.selectedId = action.payload.id;
        },
    },
});
export const { addTodoList, updateTodoList, deleteTodoList, selectTodoList } =
    todoSlice.actions;
export default todoSlice.reducer;
