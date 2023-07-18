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

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.bool.isRequired,
    })
  ),
};

export default TodoList;
