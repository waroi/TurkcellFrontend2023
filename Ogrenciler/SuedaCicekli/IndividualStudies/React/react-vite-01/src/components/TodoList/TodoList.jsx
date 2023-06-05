import PropTypes from 'prop-types';
import { useState } from 'react';



const TodoList = ({ todoList, addTodoFunction, deleteFunction }) => {
  const [search, setSearch] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = (id) => {
    deleteFunction(id);
  };

  const handleUpdate = (todo) => {
    console.log(todo)
    setIsEdit(true);
    setSearch(todo.title)
  };

  const performSearch = () => {
    const newTodo = {
      title: search,
      completed: false
    };
    console.log(newTodo)
    addTodoFunction(newTodo, isEdit);
    setSearch("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  };

  console.log(todoList, isEdit)

  return (
    <div>
      <div>
        <input type="text"
          className="w-50 rounded-4"
          placeholder="Add Todo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>

      {todoList.map((todo) => (
        <div key={todo.id} className="card__content">
          <div className="d-flex align-item-center justify-content-between">
            <div className="d-flex justify-content-center w-50">
              <input type="checkbox" />
              <p className="m-2 text-light">{todo.title}</p>
            </div>
            <div className="d-flex justify-content-center w-50">
              <button
                className="btn m-2 btn-success"
                onClick={() => handleUpdate(todo)}>
                update
              </button>
              <button
                className="btn m-2 btn-danger"
                onClick={() => handleDelete(todo.id)}
              >
                del
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  deleteFunction: PropTypes.func.isRequired,
  updateFunction: PropTypes.func.isRequired,
  addTodoFunction: PropTypes.func.isRequired,
};

export default TodoList;
