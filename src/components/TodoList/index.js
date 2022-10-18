import React from "react";
import "../style/todo.scss";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";

function TodoList(props) {
    return (
        <>
            <div className="todoListContainer">
                <AddTodo />
                <DisplayTodo />
            </div>
        </>
    );
}

export default TodoList;
