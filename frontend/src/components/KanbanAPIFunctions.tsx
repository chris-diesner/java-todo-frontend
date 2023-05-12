import axios from "axios";
import {ToDoType} from "./ToDoType";

export const getAllTodos = () =>
    axios.get('/api/todo')
        .then(response => response.data)

export const postTodo = (description:string) =>
    axios.post('/api/todo', {description: description, status:"OPEN"})

export const getTodoById = (id:string) =>
    axios.get(`/api/todo/${id}`)
        .then(response => response.data)

export const putTodo = (todo:ToDoType) =>
    axios.put(`/api/todo/${todo.id}`, todo)

export const deleteTodo = (id:string) =>
    axios.delete(`/api/todo/${id}`)