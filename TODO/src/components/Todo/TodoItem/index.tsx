import React from "react";

import "./style.css"
import { ITodoItem, TodoStoreImpl } from "../../../store/TodoStore";
import { observer } from "mobx-react";

interface TodoItemProps extends ITodoItem{
    store: TodoStoreImpl
}

const TodoItem : React.FC<TodoItemProps> = (props) => {

    const HandleTodoClick = () => {
        console.log("Item clicked");
        props.store.toggleTodo(props.id)
    }
    return (
        <li onClick={() => HandleTodoClick()}>
            {props.title} {props.completed ? <div className="check"></div> : ""}
        </li>
    )
};

export default observer(TodoItem);