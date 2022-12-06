import React from 'react';
import uuid from 'react-uuid';

const FormTodo = ({input, setInput, todos, setTodos}) => {

    const inputChangeHandler = e => {
        setInput(e.target.value)
    }
    
    const formSubmitHandler = e => {
        e.preventDefault();
        
        
        if(input.trim().length === 0) {
            return
        } else {
            setInput("")
        }
        setTodos([...todos, {id: uuid(), task: input, completed: false}]);
    }

  return (
    <>
        <form className='form' onSubmit={formSubmitHandler}>
            <input className='todo-user-input' type="text" value={input} onChange={inputChangeHandler} placeholder="enter todo..."/>
            <button className='todo-button' type='submit'>ADD TODO</button>
        </form>
    </>
  )
}

export default FormTodo