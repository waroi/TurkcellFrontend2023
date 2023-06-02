import React from "react";
import { useState, useEffect } from "react";
import ToolTip from "./ToolTip";
import InputBox from "./inputBox";
import TodoItem from "./TodoItem";
import Header from "./Header";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoText, setEditTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log("Todo verileri alınırken bir hata oluştu: ", error);
    }
  };

  const addTodo = async () => {
    try {
      if (newTodo === "") {
        alert("Lütfen bir todo giriniz");
        return;
      }

      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTodo,
          completed: false,
          important: false,
        }),
      });

      const data = await response.json();
      setTodos([...todos, data]);
      setNewTodo("");
    } catch (error) {
      console.log("Todo eklenirken bir hata oluştu: ", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });

      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      console.log("Todo silinirken bir hata oluştu: ", error);
    }
  };

  useEffect(() => {
    const results = todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, todos]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const startEditing = (id, text) => {
    setEditTodoId(id);
    setEditTodoText(text);
  };

  const cancelEditing = () => {
    setEditTodoId(null);
    setEditTodoText("");
  };

  const updateTodoText = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: editTodoText }),
      });

      const data = await response.json();
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return data;
        }
        return todo;
      });
      setTodos(updatedTodos);
      setEditTodoId(null);
    } catch (error) {
      console.log("Todo metni güncellenirken bir hata oluştu: ", error);
    }
  };

  const handleEditTodoTextChange = (e) => {
    setEditTodoText(e.target.value);
  };

  const completeTodo = async (id) => {
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      if (!todoToUpdate) {
        console.log("Todo bulunamadı");
        return;
      }

      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !todoToUpdate.completed }),
      });

      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      setTodos(updatedTodos);
    } catch (error) {
      console.log("Todo tamamlanırken bir hata oluştu: ", error);
    }
  };

  const importantTodo = async (id) => {
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      if (!todoToUpdate) {
        console.log("Todo bulunamadı");
        return;
      }

      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ important: !todoToUpdate.important }),
      });

      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, important: !todo.important };
        }
        return todo;
      });
      setTodos(updatedTodos);
    } catch (error) {
      console.log("Todo tamamlanırken bir hata oluştu: ", error);
    }
  };

  let sortedTodos = [...searchResults].sort(
    (a, b) => b.important - a.important
  );

  return (
    <div className="todo ">
      <Header />
      <InputBox newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <input
        type="text"
        placeholder="Arama Yap"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {sortedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            editTodoId={editTodoId}
            startEditing={startEditing}
            cancelEditing={cancelEditing}
            updateTodoText={updateTodoText}
            editTodoText={editTodoText}
            deleteTodo={deleteTodo}
            handleEditTodoTextChange={handleEditTodoTextChange}
            completeTodo={completeTodo}
            importantTodo={importantTodo}
          />
        ))}
      </ul>
      <ToolTip todos={todos} />
    </div>
  );
};

export default TodoList;
