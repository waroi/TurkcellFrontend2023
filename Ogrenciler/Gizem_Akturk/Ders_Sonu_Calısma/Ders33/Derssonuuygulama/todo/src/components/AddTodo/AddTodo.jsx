import React from "react";
import { useState } from "react";

const AddTodo = ({ todos, setTodos }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      name,
      date,
      status: false,
      id: Date.now(),
    };

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((data) => setTodos([...todos, data]));
  };
  return (
    <>
      <div className="modal" id="addModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title"> Add Todo</h4>
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
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Add Todo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <button
          type="button"
          className="btn btn-primary w-100 p-2"
          data-bs-toggle="modal"
          data-bs-target="#addModal"
        >
          Add todo
        </button>
      </div>
    </>
  );
};

AddTodo.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default AddTodo;
