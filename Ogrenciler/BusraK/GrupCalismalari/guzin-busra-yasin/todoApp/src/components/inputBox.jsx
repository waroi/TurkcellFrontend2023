import React from "react";
import { MdBookmarkAdd } from "react-icons/md";

const inputBox = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div className="input-box">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <MdBookmarkAdd onClick={addTodo} className="add-button" />
    </div>
  );
};

export default inputBox;
