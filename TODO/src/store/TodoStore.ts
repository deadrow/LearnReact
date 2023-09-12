import { action, makeObservable, observable } from "mobx"

export interface ITodoItem {
    id : number;
    title : string;
    completed: boolean
}

export class TodoStoreImpl {
    todos : ITodoItem[] = []

    constructor() {
        makeObservable(this, {
            todos : observable,
            addTodo : action,
            toggleTodo : action
        })
    }

    addTodo(title: string) {
        const item : ITodoItem = {
            id : +Math.random().toFixed(4),
            title,
            completed:false
        };

        this.todos.push(item);
    }

    toggleTodo(id: number) {
        const index: number = this.todos.findIndex((item) => { return item.id === id});
        if(index > -1)
            this.todos[index].completed = !this.todos[index].completed;
    }
}

export const TodoStore = new TodoStoreImpl();