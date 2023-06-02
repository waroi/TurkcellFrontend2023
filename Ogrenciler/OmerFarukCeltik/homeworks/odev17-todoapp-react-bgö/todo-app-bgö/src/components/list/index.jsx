import React from "react";
import "./style.css";
import { deleteItem } from "../../services";
import { useState } from "react";
import { putItem } from "../../services";
function deleteContent(id) {
  deleteItem(id);
}
function sendEdit(e, editItem, itemId) {
   const data = {
    "id": itemId,
    "todo":editItem,
    "checked":false
   }
   if (editItem.length > 3) {
    putItem(itemId,data); 
  }else{
    alert("todo's length can not be shorter than 3.")
   }
   
  console.log(data);
}
function sendChecked(value){
  putItem(value.id,value);
}
function ListTodo({ todo }) {
  const [edit, setEdit] = useState("");
  const [display, setDisplay] = useState("edit-class");
  const [checked, setChecked] = useState("checked-class");
  return (
    <li  className={todo.checked == true ? "checked-class-active listItem" : "unchecked-class listItem"}>
      <div className="titleGroup">
        <input type="checkbox" value={todo.checked} onChange={(e) => sendChecked({
          ...todo,
          "checked":e.target.checked
        })} />
        <h5 className="listHeader">{todo.todo}</h5>
        <div className={display}>
          <input
            type="text"
            className="edit-input"
            value={edit}
            onChange={(e) => setEdit(e.target.value)}
          />
          <input
            type="button"
            className="edit-button"
            value="Complete Edit"
            onClick={(e) => {
              sendEdit(e, edit, todo.id);
              setDisplay("edit-class");
            }}
          />
        </div>
      </div>
      <div className="buttonGroup">
        <input type="button" className="edit-button" value="edit" onClick={() => setDisplay("edit-class-active")} />
        <input
        className="delete-button"
          type="button"
          value="delete"
          onClick={() => deleteContent(todo.id)}
        />
      </div>
    </li>
  );
}

export default ListTodo;
