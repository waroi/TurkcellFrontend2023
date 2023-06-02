/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import EditTodo from "../modals/EditTodo/EditTodo";

const TodoList = ({todos}) => {
  const [process, setProcess] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState({});

 

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setProcess(data))
      .catch((err) => console.log(err));

    return <Todo todo={process} />;
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo
            todo={todo}
            handleDelete={handleDelete}
            handleOpen={handleOpen}
            setText={setText}
            setDeadline={setDeadline}
          />
          <EditTodo
            todo={todo}
            open={open}
            handleClose={handleClose}
            text={text}
            deadline={deadline}
            setDeadline={setDeadline}
            setText={setText}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
