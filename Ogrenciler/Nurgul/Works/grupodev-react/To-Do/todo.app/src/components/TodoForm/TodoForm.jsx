import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";

function TodoForm() {
  const [input, setInput] = useState("");
  const [database, setDatabase] = useState([]);

  function fetchDatabase() {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => setDatabase(data));
  }

  function addTodo() {
    let id = Date.now();
    fetch("http://localhost:3000/todos/", {
      method: "POST",
      body: JSON.stringify({ id: id, text: input }),
      headers: { "Content-Type": "application/json" },
    }).then(() => fetchDatabase());
  }

  function deleteAllTodo() {
    database.map((item) => {
      fetch("http://localhost:3000/todos/" + item.id, {
        method: "DELETE",
      }).then(() => console.log("silindi"));
    });
    fetchDatabase();
  }

  const handleValue = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchDatabase();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="To Do Giriniz"
          className="todo-input"
          onChange={handleValue}
          value={input}
        />
        <button type="submit" className="todo-button" onClick={addTodo}>
          To Do Ekle
        </button>
      </form>
      <div>
        <button onClick={deleteAllTodo}>Tüm To Do Listesini Temizle</button>
      </div>
      {database.map((todo) => {
         return <Todo key={todo.id} text={todo.text} />;
      })}
    </div>
  );
}

export default TodoForm;
