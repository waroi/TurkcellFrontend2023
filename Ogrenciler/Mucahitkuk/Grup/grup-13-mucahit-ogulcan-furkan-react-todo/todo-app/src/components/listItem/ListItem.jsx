import { useState } from "react";
import TodoList from "../../models/TodoListClass";
import Todo from "../../models/TodoClass";
import PropTypes from 'prop-types';


const ListItem = ({ item, setTodoList, text, setText, setIsChange }) => {
  const [edit, setEdit] = useState(true);

  function deleteItem() {
    const newTodoList = new TodoList(setTodoList);
    newTodoList.deleteTodo(item.id).then(() => {
      setTodoList((prev) => prev.filter((todo) => todo.id !== item.id));
    });
  }

  function editItem() {
    setText(item.title);
    setEdit(false);
    setIsChange(true);
  }

  function saveChanges() {
    if (text.trim() === "") {
      setText("Todo cannot be empty.");
      setTimeout(() => setText(""), 1000);
      return;
    }
    if (text.length > 50) {
      setText("Todo should be less than 50 characters.");
      setTimeout(() => setText(""), 1000);
      return;
    }
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id == item.id) {
          todo.title = text;
        }
        return todo;
      })
    );
    const newTodoList = new TodoList(setTodoList);
    newTodoList.updateTodo(item.id, {
      ...item,
      title: text,
    });
    setEdit(true);
    setIsChange(false);
    setText("");
  }

  function handlePriority() {
    const colors = {
      "red" : "yellow",
      "yellow" : "green",
      "green" : "red"
    }
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id == item.id) {
          todo.priority = colors[todo.priority];
        }
        return todo;
      })
    );
    const newTodoList = new TodoList(setTodoList);
    newTodoList.updateTodo(item.id, {
      ...item,
      priority: colors[item.priority],
    });
  }

 async function handleChecked() {
    const newTodoList = new TodoList();
    await newTodoList.updateTodo(item.id, {
      ...item,
      checked: !item.checked,
    });
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id == item.id) {
          todo.checked = item.checked;
        }
        return todo;
      })
    );
    newTodoList.get().then((data) => {
      const dataTwo = data.map((item) => {
        return new Todo(item.title, item.id, item.priority, item.checked);
      })
      setTodoList(dataTwo);
    });
  }

  return (  
    <li className={`${item.priority}`}>
      <div className={`title ${item.checked && "checked"}`}>
      {item.title}
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            deleteItem();
          }}
        >
          Delete
        </button>
        {edit ? (
          <button onClick={() => editItem()}>Edit</button>
        ) : (
          <button
            onClick={() => {
              saveChanges();
            }}
          >
            Save
          </button>
        )}
        <button onClick={() => handlePriority()}>Priority</button>
        <button onClick={() => handleChecked()}>Checked</button>
      </div>
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
  }).isRequired,
  setTodoList: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  isChange: PropTypes.bool.isRequired,
  setIsChange: PropTypes.func.isRequired
};
