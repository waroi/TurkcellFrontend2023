import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { BiCheckCircle } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import { BsFillPatchExclamationFill } from "react-icons/bs";

const TodoItem = ({
  todo,
  editTodoId,
  startEditing,
  cancelEditing,
  updateTodoText,
  editTodoText,
  deleteTodo,
  handleEditTodoTextChange,
  completeTodo,
  importantTodo,
}) => {
  const isCompleted = todo.completed;

  return (
    <li
      key={todo.id}
      style={{
        backgroundColor: isCompleted ? "#40916c" : null,
      }}
      className={todo.important ? " important " : null}
    >
      {editTodoId === todo.id ? (
        <div>
          <input
            type="text"
            defaultValue={editTodoText}
            onChange={handleEditTodoTextChange}
          />
          <button onClick={() => updateTodoText(todo.id)}>Kaydet</button>
          <button onClick={cancelEditing}>İptal</button>
        </div>
      ) : (
        <div className="todo-items">
          <span
            style={{
              textDecoration: isCompleted ? "line-through" : "none",
            }}
          >
            {todo.title}
          </span>

          <div className="todo-buttons">
            <MdDeleteForever onClick={() => deleteTodo(todo.id)} />
            <AiFillEdit onClick={() => startEditing(todo.id, todo.title)} />
            <BiCheckCircle onClick={() => completeTodo(todo.id)} />
            <BsFillPatchExclamationFill
              onClick={() => importantTodo(todo.id)}
            />
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
