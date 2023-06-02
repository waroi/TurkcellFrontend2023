/* eslint-disable react/prop-types */
import AddTodo from "../modals/AddTodo/AddTodo";
import Search from "../Search/Search";
import "./style.css";

const TodoTools = ({ todos, setTodos}) => {
  
  const handleOriginal = () => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
    <div className="todoTools">
      <AddTodo setTodos={setTodos} />
      <Search
        todos={todos}
        handleOriginal={handleOriginal}
        setTodos={setTodos}
      />
      
    </div>
    <hr />
    </>
  );
};

export default TodoTools;
