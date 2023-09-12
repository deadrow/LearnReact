import React, { useState } from "react";
import TodoItem from "./TodoItem";

import { TodoStoreImpl } from "../../store/TodoStore";


import "./style.css"
import { observer } from "mobx-react-lite";

interface TodoProps {
    todoStore : TodoStoreImpl;
}

const Todo : React.FC<TodoProps> = ({todoStore}) => {

    const [value, setValue] = useState<string>('');

    return(
        <div className="todo-container">
            <input value={value} type="text" onChange={(e) => {setValue(e.target.value)}} />
            <button onClick={() => {todoStore.addTodo(value)}} > Add </button>

            <ol>
                {
                    todoStore.todos.map(item => <TodoItem key={item.id} id={item.id} title={item.title} completed={item.completed} store={todoStore}/>)
                }
            </ol>
        </div>
    )
};

export default observer(Todo);