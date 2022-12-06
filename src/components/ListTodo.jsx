import React from 'react';
import { FaTrashAlt, FaCheckCircle } from 'react-icons/fa';
import uuid from 'react-uuid'

const ListTodo = ({todos,setTodos}) => {

    const deleteTodoHandler = ({id}) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const checkTodoHandler = (todo) => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {...item, completed: !item.completed}
            }
            return item;
        }))
    }

  return (
    <>
        <ul>
            {todos.map(todo => (
                <div className='item__container'>
                    <button className='item__container-btn delete-btn' onClick={() => {deleteTodoHandler(todo)}}><FaTrashAlt/></button>
                <li className='item__container-list' key={uuid()}>
                    <p className={`${todo.completed ? 'completed' : ''} task-text`}>{todo.task}</p>
                </li>
                    <button className='item__container-btn check-btn' onClick={() => {checkTodoHandler(todo)}}><FaCheckCircle /></button>
                    </div>
            ))}
            
        </ul>
        
    </>
  )
}

export default ListTodo