import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import AddBar from "./components/AddBar";
import {
    getAllTodos,
    postTodo,
    deleteTodo, putTodo, getTodoById,
} from "./components/KanbanAPIFunctions";
import ToDoCard from "./components/ToDoCard";
import toDoCard from "./components/ToDoCard";
import KanbanBoard from "./components/KanbanBoard";
import {ToDoType} from "./components/ToDoType";

function App() {
    const [todos, setTodos] = useState([])
    const [inputNewToDo, setInputNewToDo] = useState("")
    function newDescription(event:ChangeEvent<HTMLInputElement>) {
        setInputNewToDo(event.target.value)
    }

    useEffect(() => {
        getAllTodos()
            .then(todos => setTodos(todos))
            .catch(error => console.error(error))
    },[])

    const newTodo = (description:string) =>
        postTodo(description)
            .then(() => getAllTodos())
            .then(todos => setTodos(todos))
            .catch((error: any) => console.error(error))

    const removeTodo = (id:string) =>
        deleteTodo(id)
            .then(() => getAllTodos())
            .then(todos => setTodos(todos))
            .catch((error: any) => console.error(error))

    const editTodo = (todo:ToDoType) =>
        putTodo(todo)
            .then(() => getAllTodos())
            .then(todos => setTodos(todos))
            .catch((error: any) => console.error(error))

    const getById = (id:string) =>
        getTodoById(id)
            .catch((error: any) => console.error(error))



  return (
    <div className="App">
      <header className="App-header">
          <h5>Kanban Board</h5>
          <input type={"description"} value={inputNewToDo} onInput={newDescription}/><button onClick={() => newTodo(inputNewToDo)}>Add</button>
      </header>
        <body className={"kanban-body"}>
        <div className={"board"}>
            <KanbanBoard todos={todos}/>
        </div>
        </body>
    </div>
  );
}

export default App;
