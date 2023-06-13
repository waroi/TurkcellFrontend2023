import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./redux/slices/todoSlice";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(
      removeTodo({
        id,
      })
    );
  };

  const handleAdd = (todo) => {
    dispatch(addTodo(todo));
  };

  return (
    <>
      <h1>React Redux</h1>
    </>
  );
}

export default App;
