import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './redux/slices/todoSlice';
import './App.css'

const App = () => {
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: Date.now(),
        title: 'New Todo',
        description: 'New Todo Description',
      })
    );
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos found.</p>
      )}
    </>
  );
};

export default App;
