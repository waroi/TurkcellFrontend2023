import { useEffect, useState } from "react"
import TodoItem from "./todoItem/TodoItem"
import AddTodo from "./addTodo/AddTodo"

const TodoWrap = () => {
const [todos, setTodos] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/todos").then((res)=>res.json()).then((data)=>setTodos(data))
    },[])

  return (
    <div className="row justify-content-center ">

        <div className="col-lg-3 ">
            <div className="bg-white rounded-3">
                <AddTodo/>
            </div>
        </div>
        <div className="col-lg-9">
            {todos&& todos?.map((todo)=> <TodoItem key={todo.id} todo={todo} /> )}
        </div>
        
    </div>
  )
}

export default TodoWrap