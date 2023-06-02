/* eslint-disable react/prop-types */
// import {  useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import dayjs from "dayjs";

const Todo = ({ todo, handleDelete, handleOpen, setText, setDeadline }) => {
  const date = new Date(todo.deadline);

  const handlePreSubmit = () => {
    setText(todo.text);
    setDeadline(dayjs(todo.deadline));
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
      <Button onClick={() => handleDelete(todo.id)}>
        <DeleteIcon />
      </Button>
      <Button
        onClick={() => {
          handleOpen();
          handlePreSubmit();
        }}
      >
        <EditIcon />
      </Button>
    </div>
  );
};

export default Todo;
