import React,{useEffect} from 'react';
import { Button } from '@mui/material';
import { v4 as uuidv4 } from "uuid";
// import { useState } from 'react';
const Form = ({ name, setName, description, setDescription, todos, setTodos ,editTodo,setEditTodo}) => {
    const handleName = (event) =>{
        setName(event.target.value)
    }
    const handleDescription = (event) =>{
        setDescription(event.target.value)

    }
    const updateTodo = (name,description,id,completed)=>{

        const newTodo =  todos.map((todo)=>
            todo.id === id?{name,description,id,completed}:todo
        )
        setTodos(newTodo)
        setEditTodo("")
    }
    useEffect(()=>{
        if(editTodo)
        {
            setName(editTodo.name)
            setDescription(editTodo.description)
        }
        else
        {
            setName("")
            setDescription("")
        }
    },[setName,setDescription,editTodo]);
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(!editTodo)
        {
            setTodos([...todos,{id:uuidv4(),name:name,description:description,completed:false}])
            setName("")
            setDescription("")
        }
        else
        {
            updateTodo(name,description,editTodo.id,editTodo.description,editTodo.completed)
        }
       
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='todo-content'>
            <input type="text" className="name" placeholder='Enter Todo' value={name}  onChange={handleName}/>
            <input type="text" className="name" placeholder="Enter Description" value={description} onChange={handleDescription}/>
            <Button variant="contained" type="submit" className='buttoncls' size="medium"  color="success">
            {editTodo? "Ok" : "Add Todo" }
            </Button>
           
                </div>
        </form>
    )
}

export default Form