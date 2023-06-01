/* eslint-disable react/prop-types */
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

const Todo = ({ todo }) => {
  const [process, setProcess] = useState();
  const date = new Date(todo.deadline);

  const handleDelete = () => {
    fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setProcess(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      <h3>{todo.text}</h3>
      <p>
        {date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}{" "}
        {date.getMonth() < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1}{" "}
        {date.getFullYear()}{" "}
        {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:
        {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
      </p>
      <Button onClick={handleDelete}>
        <DeleteIcon />
      </Button>
      <EditIcon />
    </div>
  );
};

const todoDelete = (todo) => {
  const date = new Date(todo.deadline);
  return (
    <div className="card">
      <h3>{todo.text}</h3>
      <p>
        {date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}{" "}
        {date.getMonth() < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1}{" "}
        {date.getFullYear()}{" "}
        {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:
        {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
      </p>
      <Button onClick={handleDelete}>
        <DeleteIcon />
      </Button>
      <EditIcon />
    </div>
  );
};

export default Todo;
