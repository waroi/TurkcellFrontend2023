import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
const ToDoForm = ({addTodo}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" value={value} placeholder="Yapılacak bir şey gir.." onChange={(e) => setValue(e.target.value)} />
      <button className="todo-btn" type="submit"> <FontAwesomeIcon icon={faPlus} /> </button>
    </form>
  )
}

export default ToDoForm;