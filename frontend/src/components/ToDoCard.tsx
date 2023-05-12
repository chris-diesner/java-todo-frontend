import React, {useEffect, useState} from 'react';
import {ToDoType} from "./ToDoType";
import {advanceTodo, deleteTodo, getAllTodos, putTodo} from "./KanbanAPIFunctions";


type Props = {
    toDo: ToDo
}

type ToDo = {
    id: string
    description: string
    status: string
}


function advanceToDoing() {

}

function ToDoCard(props: Props) {

    useEffect(() => {
        getAllTodos()
            .then(todos => setTodos(todos))
            .catch(error => console.error(error))
    },[])

    const [todos, setTodos] = useState([])
    const editTodo = (todo:ToDoType) =>
        advanceTodo(todo)
            .then(() => getAllTodos())
            .then(todos => setTodos(todos))
            .catch((error: any) => console.error(error))

    const removeTodo = (todo:ToDoType) =>
        deleteTodo(todo.id)
            .then(() => getAllTodos())
            .then(todos => setTodos(todos))
            .catch((error: any) => console.error(error))

    return (
        <div className={"todo-wrapper"}>
            <h4>{props.toDo.description}</h4>
            <div className={"todo-functions"}>
                <p>Details</p><p>Edit</p><button onClick={() => removeTodo(props.toDo)}>Advance</button>
            </div>
        </div>
    );
}

export default ToDoCard;