import React, {useState} from 'react';
import {ToDoType} from "./ToDoType";
import ToDoCard from "./ToDoCard";
type Props = {
    todos:ToDoType[]
}


function KanbanBoard(props: Props) {

    const [todos, setTodos] = useState<ToDoType[]>([])
    const open = props.todos.filter((todo) => todo.status === "OPEN")
        .map(currentTodo => <ToDoCard toDo={currentTodo}/>)
    const doing = props.todos.filter((todo) => todo.status === "DOING")
        .map(currentTodo => <ToDoCard toDo={currentTodo}/>)
    const done = props.todos.filter((todo) => todo.status === "DONE")
        .map(currentTodo => <ToDoCard toDo={currentTodo}/>)

    return (
        <div className={"board-wrapper"}>
            <div className={"todo"}>
                <h3>ToDo</h3>
                {open}
            </div>
            <div className={"doing"}>
                <h3>Doing</h3>
                {doing}
            </div>
            <div className={"done"}>
                <h3>Done</h3>
                {done}
            </div>
        </div>
    );
}

export default KanbanBoard;