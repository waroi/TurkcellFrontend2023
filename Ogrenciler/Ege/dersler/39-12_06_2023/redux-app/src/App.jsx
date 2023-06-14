import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { addTodo, deleteTodo } from "../redux/slices/todoSlice"


function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  const handleAddTodo = (newTodo) => {
    dispatch(addTodo(newTodo))
  }

  return (
    <>
      <h1>React Redux</h1>
    </>
  )
}

export default App
