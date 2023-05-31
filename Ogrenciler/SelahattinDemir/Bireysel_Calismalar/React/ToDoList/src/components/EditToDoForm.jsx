/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const EditToDoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!value) return;
    editTodo(value, task.id);
    setValue('');
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
    <input type="text" className="todo-input" value={value} placeholder="Yapılacak bir şey gir.." onChange={(e) => setValue(e.target.value)} />
    <button className="todo-btn" type="submit"> <FontAwesomeIcon icon={faPenToSquare} /> </button>
  </form>
  )
}

export default EditToDoForm