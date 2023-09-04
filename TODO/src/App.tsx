import React, { useState } from "react";
import Todo from "./components/Todo";
import Counter from "./components/Counter";

const myTodoItems = [
    {
        id: 1,
        title: 'I need to finish hw'
    },
    {
        id: 2,
        title: 'I need to code'
    },
    {
        id: 3,
        title: 'I need to sleep early'
    }
]
const App: React.FC = () => {
    const [state, setState] = useState<boolean>(true);

    return(
        <div>
            <Todo items={myTodoItems}/>
            <button onClick={(e) => setState(!state)}>Toggle</button>
            {state ? <Counter /> : ""}
        </div>
        
    )
}

export default App;