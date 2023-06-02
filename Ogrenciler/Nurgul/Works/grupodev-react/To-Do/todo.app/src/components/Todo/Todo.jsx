import React, { useState } from "react";
import "./Todo.css";

function Todo(props) {
  const [value, setValue] = useState("");

  const handleTodo = (e) => {
    setValue(e.target.value);
  };

  const createEditUI = (e) => {
    return (
      <div className="edit-div">
        <input
          type="text"
          placeholder="todo güncelle"
          onChange={handleTodo}
          value={value}
        />
        <button
          onClick={(e) => {
            setValue("");
            return props.editTodo(
              e.target.parentNode.parentNode.parentNode.id,
              value
            );
          }}
        >
          Todo Güncelle
        </button>
      </div>
    );
  };
  return (
    <div className="todo-card" id={props.id}>
      <div className="todo-headline">
        <h2>{props.text.charAt(0).toUpperCase() + props.text.slice(1)}</h2>
      </div>
      <div className="todo-edit">{createEditUI()}</div>
      <div className="todo-buttons">
        <button
          className="todo-delete"
          onClick={(e) => props.removeTodo(e.target.parentNode.parentNode.id)}
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default Todo;
