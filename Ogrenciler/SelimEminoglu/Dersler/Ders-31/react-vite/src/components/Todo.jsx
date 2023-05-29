import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
function Todo({ todos, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => {
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={completeTodo(todo.id)}>
        {todo.text}
        <div className="icons">
          <AiFillDelete />
          <AiFillEdit />
        </div>
      </div>
    </div>;
  });
}

export default Todo;
