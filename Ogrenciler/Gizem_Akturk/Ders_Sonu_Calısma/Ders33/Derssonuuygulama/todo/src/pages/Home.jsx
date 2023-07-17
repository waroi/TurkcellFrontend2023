import { useEffect, useState } from "react";
import "./Home.css";
import AddTodo from "../components/AddTodo/AddTodo";
import TodoList from "../components/TodoList/TodoList";
import Search from "../components/Search/Search";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/todos")
        .then((res) => res.json())
        .then((data) => setTodos(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="container w-100 p-5">
        <div className="row ">
          <div className="col-8 ">
            <Search setTodos={setTodos} />
          </div>
          <div className="col-4">
            <AddTodo todos={todos} setTodos={setTodos} />
          </div>
        </div>

        <TodoList todos={todos} />
      </div>
    </>
  );
}

export default Home;
