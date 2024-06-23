import List from "./List"
import Form from "./Form"
import {useState} from "react";
const Todo =() =>{
    const todoList = [
        {id: 1, label: "店予約する"},
        {id: 2, label: "卵買う"},
        {id: 3, label: "郵便出す"}
    ]
    const [todos, setTodos]= useState(todoList);

    const deleteTodo = (id) =>{
        const newTodos = todos.filter((todo)=>{
            return todo.id != id;
        });
        console.log(newTodos);
        setTodos(newTodos);
    };
    const createTodo = (todo) =>{
        setTodos([...todos,todo]);
    }

    return(
        <>
            <List todos ={todos} deleteTodo={deleteTodo}/>
            <Form createTodo ={createTodo}/>
        </>
    )
}

export default Todo;