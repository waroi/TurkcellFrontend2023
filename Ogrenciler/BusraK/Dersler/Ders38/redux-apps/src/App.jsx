import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTodo, deleteTodo } from "./redux/slices/todoSlice";

function App() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // const handleDelete = (id) => {
  //   dispatch(
  //     deleteTodo({
  //       id: id,
  //     })
  //   );
  // };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  // const handleAdd = () => {
  //   dispatch(
  //     addTodo({
  //       id: Math.floor(Math.random() * 1000),
  //       title: "New Todo",
  //     })
  //   );
  // };

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  return <></>;
}

export default App;
//pokemon
//https://pokeapi.co/
//https://api.chucknorris.io/
