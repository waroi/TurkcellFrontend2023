import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import "./TodoList.css";

function TodoList() {
  return (
    <div className="todo-list">
      <div className="todo-title">
        <h1>FNS-To Do Uygulaması</h1>
      </div>
      <TodoForm />
    </div>
  );
}

export default TodoList;
