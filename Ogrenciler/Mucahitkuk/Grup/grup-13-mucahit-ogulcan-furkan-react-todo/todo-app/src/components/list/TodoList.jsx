import React from "react";
import ListItem from "../listItem/ListItem";

const TodoList = ({ todoList, setTodoList, text, setText, isChange, setIsChange}) => {
  return (
    <>
      {todoList.map((item) => <ListItem isChange={isChange} setIsChange={setIsChange} text={text} setText={setText} todoList={todoList} setTodoList={setTodoList} item={item} key={item.id} />   
    )}
    </>
  );
};

export default TodoList;
