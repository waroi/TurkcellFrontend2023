
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './redux/slices/todoSlice';

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddTodo({ id: 1, text: 'New Todo' })}>
        Add Todo
      </button>
    </div>
  );
}

export default App;
