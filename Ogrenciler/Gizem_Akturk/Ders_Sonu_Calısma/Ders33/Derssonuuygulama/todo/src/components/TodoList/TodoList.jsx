import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div id="todos">
      <h2 className="m-3"> Todo List</h2>
      <div className="container row">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
