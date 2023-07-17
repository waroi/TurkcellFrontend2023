import React from "react";
import { useState } from "react";

const TodoItem = ({ todo }) => {
  const [status, setStatus] = useState(todo.status);
  const [updatedName, setUpdatedName] = useState(todo.name);
  const [updatedDate, setUpdatedDate] = useState(todo.date);
  const [todoName, setTodoName] = useState(todo.name);
  const [todoDate, setTodoDate] = useState(todo.date);
  const isOutdated = new Date(todo.date) < new Date();

  const handleCheckbox = (e) => {
    const updatedTodo = {
      ...todo,
      status: e.target.checked,
    };
    fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((res) => res.json())
      .then((data) => setStatus(data.status));
  };

  const handleUpdate = () => {
    const updatedTodo = {
      ...todo,
      name: updatedName,
      date: updatedDate,
    };
    fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((res) => res.json())
      .then((data) => {
        setTodoName(data.name);
        setTodoDate(data.date);
      });
  };

  return (
    <div className="col-4 mb-3">
      <div className="modal" id={"myModal" + todo.id}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title"> Update Todo</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="text" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                name="name"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                End Date:
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter date"
                name="date"
                value={updatedDate}
                onChange={(e) => setUpdatedDate(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={handleUpdate}
              >
                Update Todo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={status ? "card p-3 bg-success " : isOutdated ? "card bg-danger p-3": "card p-3 "}>
        <h3>{todoName}</h3>
        <input
          type="checkbox"
          name="done"
          id="done"
          onChange={(e) => handleCheckbox(e)}
          checked={status}
        />
        <p>{todoDate}</p>
        <div className="container mt-3">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={"#myModal" + todo.id}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
