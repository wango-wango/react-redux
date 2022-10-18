import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    updateTodoList,
    deleteTodoList,
    selectTodoList,
} from "../../reducers/todoSlice";
import { AiFillDelete, AiOutlineUpload, AiFillEdit } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import { useState } from "react";

function DisplayTodo() {
    // useSelector 是一種hook 用來檢視目前 redux 中的存放的 reducer
    const todoList = useSelector((state) => state.todoList.value);
    // useDispatch 用來 執行 action
    const dispatch = useDispatch();

    const [editedCheck, setEditedCheck] = useState([]);
    const [checked, setChecked] = useState([]);

    return (
        <div className="displayUsers">
            {todoList.map((v, i) => {
                return (
                    <div key={v.id} className="ListCard">
                        <div className="listCardContent">
                            {/* 劃掉清單 */}
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
                            {/* 清單名稱 */}
                            <input
                                type="text"
                                value={v.todo}
                                readOnly={!editedCheck.includes(v.id)}
                                onChange={(e) => {
                                    dispatch(
                                        updateTodoList({
                                            id: v.id,
                                            todo: e.target.value,
                                            workingTime: v.workingTime,
                                            breakTime: v.breakTime,
                                        })
                                    );
                                }}
                                className={
                                    checked.includes(v.id + "")
                                        ? "showInput todoChecked"
                                        : "showInput"
                                }
                            />
                            {/* 清單工作時間 */}
                            <input
                                type="number"
                                value={v.workingTime}
                                readOnly={!editedCheck.includes(v.id)}
                                onChange={(e) => {
                                    dispatch(
                                        updateTodoList({
                                            id: v.id,
                                            todo: v.todo,
                                            workingTime: parseInt(
                                                e.target.value
                                            ),
                                            breakTime: v.breakTime,
                                        })
                                    );
                                }}
                                className={
                                    checked.includes(v.id + "")
                                        ? "showInput showWorkingTime todoChecked"
                                        : "showInput showWorkingTime"
                                }
                            />
                            {/* 清單休息時間 */}
                            <input
                                type="number"
                                value={v.breakTime}
                                readOnly={!editedCheck.includes(v.id)}
                                onChange={(e) => {
                                    dispatch(
                                        updateTodoList({
                                            id: v.id,
                                            todo: v.todo,
                                            workingTime: v.workingTime,
                                            breakTime: parseInt(e.target.value),
                                        })
                                    );
                                }}
                                className={
                                    checked.includes(v.id + "")
                                        ? "showInput showBreakTime todoChecked"
                                        : "showInput showBreakTime"
                                }
                            />
                            {/* 編輯按鈕 */}
                            <button
                                disabled={checked.includes(v.id)}
                                onClick={() => {
                                    const value = v.id;
                                    if (editedCheck.includes(value)) {
                                        const oldEditedCheck = editedCheck;
                                        const newEditedCheck =
                                            oldEditedCheck.filter(
                                                (v) => v !== value
                                            );
                                        setEditedCheck(newEditedCheck);
                                    } else {
                                        setEditedCheck([...editedCheck, value]);
                                    }
                                }}
                            >
                                {/* 判斷編輯 or 上傳的 icon */}
                                {editedCheck.includes(v.id) ? (
                                    <AiOutlineUpload />
                                ) : (
                                    <AiFillEdit />
                                )}
                            </button>
                            {/* 刪除按鈕 */}
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
                            {/* 播放 */}
                            <button
                                onClick={() => {
                                    dispatch(
                                        selectTodoList({
                                            id: v.id,
                                        })
                                    );
                                }}
                            >
                                <FiPlay size={14} />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default DisplayTodo;
