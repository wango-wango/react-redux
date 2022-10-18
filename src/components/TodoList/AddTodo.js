import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoList } from "../../reducers/todoSlice";
import { useState } from "react";

function AddTodo(props) {
    // useSelector 是一種hook 用來檢視目前 redux 中的存放的 reducer
    const todoList = useSelector((state) => state.todoList.value);
    // useDispatch 用來 執行 action
    const dispatch = useDispatch();

    const [newTodoList, setNewTodoList] = useState({
        todo: "",
        workingTime: 0,
        breakTime: 0,
    });

    return (
        <div className="adduser">
            <div className="todoHeader">
                <h1> Add todoList </h1>
            </div>
            <div className="adduserContent">
                <input
                    type="text"
                    placeholder="TodoList"
                    className="addTodoList"
                    onChange={(e) => {
                        const addTodoList = {
                            ...newTodoList,
                            todo: e.target.value,
                        };
                        setNewTodoList(addTodoList);
                    }}
                />
                <input
                    type="number"
                    placeholder="WorkingTime"
                    className="addWorkingTime"
                    onChange={(e) => {
                        const addWorkingTime = {
                            ...newTodoList,
                            workingTime: e.target.value,
                        };
                        setNewTodoList(addWorkingTime);
                    }}
                />
                <input
                    type="number"
                    placeholder="BreakTime"
                    className="addBreakTime"
                    onChange={(e) => {
                        const addBreakTime = {
                            ...newTodoList,
                            breakTime: e.target.value,
                        };
                        setNewTodoList(addBreakTime);
                    }}
                />
                <button
                    onClick={() => {
                        // dispatch(addUser({ id: 0, name: name, username: userName }));
                        // 當 物件的 key = 狀態名稱時 可以簡寫成下列的樣式
                        dispatch(
                            addTodoList({
                                // 利用 useList.length-1 找到最後一個 userList.id
                                id:
                                    todoList.length === 0
                                        ? 1
                                        : todoList[todoList.length - 1].id + 1,
                                todo: newTodoList.todo,
                                workingTime: newTodoList.workingTime,
                                breakTime: newTodoList.breakTime,
                            })
                        );
                    }}
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default AddTodo;
