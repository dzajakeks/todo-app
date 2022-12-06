import { useState } from 'react'
import './App.css'
import FormTodo from './components/FormTodo'
import ListTodo from './components/ListTodo';

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);


  return (
    <>
      <p className='todo-title'>ToDo (revolutional!)</p>
      <FormTodo input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
      <ListTodo todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
