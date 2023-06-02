import { useState, useEffect } from "react";
import TodoTools from "./components/TodoTools/TodoTools";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <TodoTools todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
