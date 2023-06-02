/* eslint-disable react/prop-types */
import {  useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from '@mui/icons-material/Check';
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import "./style.css"
import EditTodo from "../modals/EditTodo/EditTodo";

const Todo = ({ todo, setTodos }) => {
  const [passed, setPassed] = useState(false);
  const date = new Date(todo.deadline);
  const current = Date.now();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState({});
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className={`${passed ? "passed" : ""} ${todo.completed ? "completed" : ""} todo `}>
      <div className="todo-info">
      <h3>{todo.text}</h3>
      <p>
        {date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}{"/"}
        {date.getMonth() < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1}{"/"}
        {date.getFullYear()}{" "}
        {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:
        {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}
      </p>
      </div>
      <div className="buttons-area">
      <Button  onClick={() => handleDelete()}>
        <DeleteIcon className="Buttons"/>
      </Button>
      <Button 
        onClick={() => {
          handleOpen();
          handlePreSubmit();

        }}
      >
        <EditIcon className="Buttons"/>
      </Button>
      <EditTodo
      id={todo.id}
      todo={todo}
      open={open}
      handleClose={handleClose}
      text={text}
      deadline={deadline}
      setDeadline={setDeadline}
      setText={setText}
      setTodos = {setTodos}
    />
      <Button  onClick = {() => handleComplete()}>
          <CheckIcon className="Buttons"/>
        </Button>
      </div>
    </div>
  );
};

export default Todo;
