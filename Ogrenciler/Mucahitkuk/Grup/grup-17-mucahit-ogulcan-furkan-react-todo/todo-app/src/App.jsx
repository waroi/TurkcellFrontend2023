import { Suspense, useEffect, useState } from "react";
import "./App.css";
import TodoListClass from "./models/TodoListClass";
import Form from "./components/Form/Form";
import TodoList from "./components/list/todoList";
import Todo from "./models/TodoClass";

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    const newTodoList = new TodoListClass();
    newTodoList.get().then((data) => {
      const dataTwo = data.map((item) => {
        return new Todo(item.title, item.id, item.priority, item.checked);
      })
      setTodoList(dataTwo);
    });
  }, []);
  return (
    <div className="App">
      <h1>Need2do</h1>
      <p className="creators">Created by Oğulcan Munoğulları - Muhammed Furkan Uygur - Mücahit Kuk</p>
      <Form isChange={isChange} text={text} todoList={todoList} setTodoList={setTodoList} setText={setText} />
      <Suspense fallback={<div>Loading...</div>}>
        <TodoList setIsChange={setIsChange} isChange={isChange} setText={setText} text={text} todoList={todoList} setTodoList={setTodoList} />
      </Suspense>
    </div>
  );
}

export default App;
