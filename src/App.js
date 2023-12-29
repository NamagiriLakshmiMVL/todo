
import './App.css';
import { useState } from 'react';
import Header from './components/Header'
import Form from './components/Form';
import Todolist from './components/Todolist';

const App = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo,setEditTodo] = useState(null)

  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Form
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <Todolist todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  )
}

export default App;
