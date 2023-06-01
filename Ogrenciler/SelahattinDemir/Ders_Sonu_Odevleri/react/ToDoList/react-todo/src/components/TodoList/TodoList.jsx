/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  }, [todos]);

  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo todo={todo} todos={todos} setTodos={setTodos} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
