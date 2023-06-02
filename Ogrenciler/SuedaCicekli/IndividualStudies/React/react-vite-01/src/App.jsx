import { useEffect, useState } from 'react'
import './App.css'
import { getAllTodos, deleteTodo, addTodo, updateTodo } from './service/api'
import TodoList from './components/TodoList/TodoList'
import TodoHeader from './components/TodoNav/TodoNav'

function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    getTodos();
  }, [])

  const getTodos = async () => {
    const response = await getAllTodos();
    setTodoList(response);
  }

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    getTodos(); // Silme işleminden sonra todo listesini güncellemek için tekrar getTodos() fonksiyonunu çağırıyoruz.
  }

  const handleNewTodo = async (todo, isEdit) => {
    console.log(todo, isEdit)
    if (isEdit) {
      await updateTodo(todo.id, todo);
    } else {
      await addTodo(todo);
    }
    getTodos();
  }

  const handleUpdateTodo = async (id, updatedTodo) => {
    await updateTodo(id, updatedTodo);
    getTodos();
  }

  return (
    <>
      <h1 className='text-dark'>TODO</h1>
      <div className='card'>
        <div className="tools">
          <div className="circle">
            <span className="red box"></span>
          </div>
          <div className="circle">
            <span className="yellow box"></span>
          </div>
          <div className="circle">
            <span className="green box"></span>
          </div>
        </div>
        <TodoList todoList={todoList} addTodoFunction={handleNewTodo} deleteFunction={handleDeleteTodo} updateFunction={handleUpdateTodo} />
      </div>
    </>
  )
}

export default App
