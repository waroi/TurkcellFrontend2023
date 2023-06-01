import React, { useEffect, useState } from 'react';
import { setItem } from '../../services';
import "./style.css"
function TodoInput() {
  const [todo, setTodo] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if(todo.length > 0){
      setItem(todo)
    setTodo('');
    }else{
      alert("you can not send empty entry");
    }
  };

  return (
    <div>
      <form className='todo-form' onSubmit={handleSubmit}>
          <br />
          <input 
          className='todo-input'
            type="text" 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        <input className='todo-button' value="Submit" type="submit"/> 
      </form>
    </div>
  );
}

export default TodoInput;
