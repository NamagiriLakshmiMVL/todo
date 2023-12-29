import React from "react";
import { TextField,Button } from "@mui/material";
import BasicSelect from './BasicSelect'
import Heading from "./Heading";

const Todolist = ({ todos, setTodos, setEditTodo }) => {
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    // const handleStatus = (todo) => {
    //     setTodos(todos.map((item) => {
    //         if (item.id === todo.id) {
    //             return { ...item, completed: !item.completed }
    //         }
    //         return item
    //     }))
    // }

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo)

    }
    return (
        <div className="display">
<Heading/>

            {todos.map((todo) => (

                <li className="liname" key={todo.id}>
                    <div className="namecls">
                        <label>Name: </label>
                        <TextField hiddenLabel id="hidden-label-small" size="small" variant="standard" value={todo.name} onChange={(event) => event.preventDefault()} />
                    </div><br />
                    <div className="namecls">
                        <label>Description: </label>
                        <TextField hiddenLabel id="hidden-label-small" variant="standard" size="small" value={todo.description} onChange={(event) => event.preventDefault()} />
                    </div><br />
                    <div>
                        <BasicSelect/>
                    </div>
                    <div className="btncls1">
                    <Button variant="contained" size="small"  onClick={() => handleEdit(todo)} color="warning">
                           Edit
                        </Button>
                      
                        <Button variant="contained" size="small" onClick={() => handleDelete(todo)} color="success">
                            Delete
                        </Button>


                        {/* <button onClick={() => handleStatus(todo)}>Status</button> */}
                    </div>
                </li>




            ))}
        </div>
    )
}

export default Todolist