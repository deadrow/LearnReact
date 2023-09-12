import Todo from "./components/Todo";
import { TodoStore } from "./store/TodoStore";

const App: React.FC = () => {
    return(
        <div>
            <Todo todoStore={TodoStore}/>
        </div>
        
    )
}

export default App;