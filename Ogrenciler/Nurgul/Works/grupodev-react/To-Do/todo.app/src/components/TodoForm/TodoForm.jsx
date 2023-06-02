import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import "./TodoForm.css";

function TodoForm() {
  const [input, setInput] = useState("");
  const [database, setDatabase] = useState([]);

  function fetchDatabase() {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => setDatabase(data));
  }

  const deleteTodo = (id) => {
    fetch("http://localhost:3000/todos/" + id, {
      method: "DELETE",
    }).then(() => fetchDatabase());
  };

  const editTodo = (id, data) => {
    fetch("http://localhost:3000/todos/" + id, {
      method: "PUT",
      body: JSON.stringify({ id: id, text: data }),
      headers: { "Content-Type": "application/json" },
    }).then(() => fetchDatabase());
  };

  function addTodo() {
    let id = Date.now();
    fetch("http://localhost:3000/todos/", {
      method: "POST",
      body: JSON.stringify({ id: id, text: input }),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      setInput("");
      return fetchDatabase();
    });
  }

  function deleteAllTodo() {
    database.map((item) => {
      fetch("http://localhost:3000/todos/" + item.id, {
        method: "DELETE",
      }).then(() => fetchDatabase());
    });
  }

  const handleValue = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchDatabase();
  }, []);

  return (
    <div className="todo-form">
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
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            removeTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoForm;
