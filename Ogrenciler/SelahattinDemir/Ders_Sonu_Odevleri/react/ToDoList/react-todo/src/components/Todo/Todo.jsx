/* eslint-disable react/prop-types */
import {  useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from '@mui/icons-material/Check';
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import "./style.css"

const Todo = ({ todo, handleOpen, setText, setDeadline, setTodos }) => {
  const [passed, setPassed] = useState(false);
  const date = new Date(todo.deadline);
  const current = Date.now();
  const handlePreSubmit = () => {
    setText(todo.text);
    setDeadline(dayjs(todo.deadline));
  };

  useEffect(() => {
    if(current > date){
      setPassed(true)
    }else {
      setPassed(false)
    }
  }, [])

  const fetchData = () => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  }

  
  const handleDelete = () => {
    fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(fetchData)
      .catch((err) => console.log(err));}



  const handleComplete = () => {
    

    fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...todo, completed: !todo.completed}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .then(fetchData)
      .catch((err) => console.log(err));
  }


  return (
    <div className={`${passed ? "passed" : ""} ${todo.completed ? "completed" : ""}`}>
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
      <Button onClick={() => handleDelete()}>
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
      <Button onClick = {() => handleComplete()}>
          <CheckIcon/>
        </Button>
    </div>
  );
};

export default Todo;
