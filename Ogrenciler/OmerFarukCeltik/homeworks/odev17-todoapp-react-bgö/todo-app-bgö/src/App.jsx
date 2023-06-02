import { useState } from "react";
import "./App.css";
import TodoInput from "./components/header";
import ListTodo from "./components/list";
import { getList } from "./services";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/todos").then((arr) => arr.json()).then((arr) => setTodos(arr)).then(() => console.log(todos))
  });

  return (
    <>
    <h2>ToDo App</h2>
      <TodoInput />
      <ul className="list-group">
      {
      todos.length ?
      todos.map((item) => (
        <ListTodo key={item.id} todo={item} />
      )) : []
      }
      </ul>
    </>
  );
}

export default App;
