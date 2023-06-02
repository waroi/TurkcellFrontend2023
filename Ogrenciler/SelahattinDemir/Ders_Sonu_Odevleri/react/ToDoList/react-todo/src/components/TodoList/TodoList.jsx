/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import "./style.css"


const TodoList = ({todos, setTodos, filter}) => {
  // const [filteredTodos, setFilteredTodos] = useState([]);



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
    <div className="todoList">
     
      {
      todos.map((todo) => (
        <div key={todo.id}>
          <Todo
            todo={todo}
            setTodos = {setTodos}
          />
        
        </div>
      ))}
    </div>
  );
};

export default TodoList;
