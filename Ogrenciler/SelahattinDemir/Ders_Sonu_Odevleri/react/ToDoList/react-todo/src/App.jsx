import { useState, useEffect } from "react";
import TodoTools from "./components/TodoTools/TodoTools";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>

    <div className="container">
    <h1 className="title">Lord of Todos</h1>
      <TodoTools todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} />
      <TodoList todos={todos} setTodos = {setTodos} filter={filter} />
    </div>
    </>
  );
}

export default App;
