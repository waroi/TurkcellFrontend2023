import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import EditToDoForm from './EditToDoForm';

uuidv4();

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    // if (!todo.text || /^\s*$/.test(todo.text)) {
    //   return
    // }

    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false }]);

    console.log(...todos);
  }

  const toggleComplete = (id) => {
    setTodos( todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const editTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    }))
  }
  
  const editTask = (value, id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.task = value;
        todo.isEditing = !todo.isEditing;
      }
      return todo;
    }))
  }

  return (
    <div className="TodoWrapper">
      <h1>Yapılacaklar</h1>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        (todo.isEditing) ? <EditToDoForm key={index} editTodo={editTask} task={todo} />: <ToDo key={index} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}  />
      ))}
    </div>
  )
}

export default ToDoWrapper;