import React from "react";

function Todo(props) {
  return (
    <div>
      <div className="todo-headline">
        <h2>{props.text}</h2>
      </div>
      <div className="todo-buttons">
        <button className="todo-update">Güncelle</button>
        <button className="todo-delete">Sil</button>
      </div>
    </div>
  );
}

export default Todo;
