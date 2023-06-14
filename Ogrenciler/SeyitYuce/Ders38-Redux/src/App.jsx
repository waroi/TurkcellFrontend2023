import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./redux/slice/todoSlice";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleAddTodo = ({id:Date.now(),title:"Todo",completed:false})  => {
    dispatch(addTodo( {id:Date.now(),title:"Todo",completed:false}));
  };
  return (
    <>

      
    </>
  );
}

export default App;
