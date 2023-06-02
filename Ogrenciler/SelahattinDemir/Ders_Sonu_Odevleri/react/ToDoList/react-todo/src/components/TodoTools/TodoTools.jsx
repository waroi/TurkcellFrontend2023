/* eslint-disable react/prop-types */
import AddTodo from "../modals/AddTodo/AddTodo";
import Search from "../Search/Search";

const TodoTools = ({ todos, setTodos }) => {
  
  const handleOriginal = () => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <AddTodo />
      <Search
        todos={todos}
        handleOriginal={handleOriginal}
        setTodos={setTodos}
      />
    </div>
  );
};

export default TodoTools;
