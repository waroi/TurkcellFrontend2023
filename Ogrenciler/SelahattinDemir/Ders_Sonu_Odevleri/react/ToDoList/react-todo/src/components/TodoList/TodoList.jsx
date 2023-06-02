/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import EditTodo from "../modals/EditTodo/EditTodo";

const TodoList = ({todos, setTodos, filter}) => {
  const [filteredTodos, setFilteredTodos] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState({});

  // useEffect (() => {
  //   if(filter == "completed"){
  //     setFilteredTodos(todos.filter(todo => todo.completed == true))
  //   }
  //   else if(filter == "uncompleted"){
  //     setFilteredTodos(todos.filter(todo => todo.completed == false))
  //   }
  //   else {
  //       setFilteredTodos(todos)}
  // }, [filter])

  // useEffect(() => {
  //   setFilteredTodos(todos)
  // }, [])
  return (
    <div>
     
      {
      todos.map((todo) => (
        <div key={todo.id}>
          <Todo
            todo={todo}
            handleOpen={handleOpen}
            setText={setText}
            setDeadline={setDeadline}
            setTodos = {setTodos}
          />
          <EditTodo
            todo={todo}
            open={open}
            handleClose={handleClose}
            text={text}
            deadline={deadline}
            setDeadline={setDeadline}
            setText={setText}
            setTodos = {setTodos}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
