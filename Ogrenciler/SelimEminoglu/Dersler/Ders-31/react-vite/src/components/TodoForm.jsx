import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleValue = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="To do Girin"
        onChange={handleValue}
        value={input}
      />
      <button className="add-button" type="submit">
        To Do Ekle
      </button>
    </form>
  );
}

export default TodoForm;
