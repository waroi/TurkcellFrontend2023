import React, { useState } from "react";

function todo() {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => {
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    ></div>;
  });
}

export default todo;
