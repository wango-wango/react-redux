import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodoList, deleteTodoList } from "../../reducers/todoSlice";
import { AiFillDelete, AiOutlineUpload, AiFillEdit } from "react-icons/ai";
import { useState } from "react";

function DisplayTodo() {
    // useSelector 是一種hook 用來檢視目前 redux 中的存放的 reducer
    const todoList = useSelector((state) => state.todoList.value);
    // useDispatch 用來 執行 action
    const dispatch = useDispatch();

    const [upDateTodoList, setUpDateTodoList] = useState({
        todo: "",
        workingTime: 0,
        breakTime: 0,
    });
    const [editedCheck, setEditedCheck] = useState("");
    const [checked, setChecked] = useState([]);

    return (
        <div className="displayUsers">
            {todoList.map((v, i) => {
                return (
                    <div key={v.id} className="ListCard">
                        <div className="listCardContent">
                            <input
                                type="checkbox"
                                className="checkInput"
                                checked={checked.includes(v.id + "")}
                                value={v.id}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    if (checked.includes(value)) {
                                        const oldChecked = checked;
                                        const newChecked = oldChecked.filter(
                                            (v) => v !== value
                                        );
                                        setChecked(newChecked);
                                    } else {
                                        setChecked([...checked, value]);
                                    }
                                }}
                            />
                            <input
                                type="text"
                                defaultValue={v.todo}
                                readOnly={v.id !== editedCheck}
                                onChange={(e) => {
                                    const newUpDateTodoList = {
                                        ...updateTodoList,
                                        todo: e.target.value,
                                    };
                                    setUpDateTodoList(newUpDateTodoList);
                                }}
                                className={
                                    checked.includes(v.id + "")
                                        ? "showInput todoChecked"
                                        : "showInput"
                                }
                            />
                            <input
                                type="number"
                                defaultValue={v.workingTime}
                                readOnly={v.id !== editedCheck}
                                onChange={(e) => {
                                    const newUpDateTodoList = {
                                        ...updateTodoList,
                                        workingTime: e.target.value,
                                    };
                                    setUpDateTodoList(newUpDateTodoList);
                                }}
                                className={
                                    checked.includes(v.id + "")
                                        ? "showInput showWorkingTime todoChecked"
                                        : "showInput showWorkingTime"
                                }
                            />
                            <input
                                type="number"
                                defaultValue={v.breakTime}
                                readOnly={v.id !== editedCheck}
                                onChange={(e) => {
                                    const newUpDateTodoList = {
                                        ...updateTodoList,
                                        breakTime: e.target.value,
                                    };
                                    setUpDateTodoList(newUpDateTodoList);
                                }}
                                className={
                                    checked.includes(v.id + "")
                                        ? "showInput showBreakTime todoChecked"
                                        : "showInput showBreakTime"
                                }
                            />
                            <button
                                disabled={checked.includes(v.id + "")}
                                onClick={() => {
                                    editedCheck === v.id
                                        ? setEditedCheck()
                                        : setEditedCheck(v.id);
                                    if (v.id === editedCheck) {
                                        dispatch(
                                            updateTodoList({
                                                id: v.id,
                                                todoList: upDateTodoList,
                                            })
                                        );
                                    }
                                }}
                            >
                                {v.id === editedCheck ? (
                                    <AiOutlineUpload />
                                ) : (
                                    <AiFillEdit />
                                )}
                            </button>
                            <button
                                onClick={() => {
                                    dispatch(
                                        deleteTodoList({
                                            id: v.id,
                                        })
                                    );
                                }}
                            >
                                <AiFillDelete size={14} />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default DisplayTodo;
