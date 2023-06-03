import { useEffect, useState } from "react"
import TodoItem from "./todoItem/TodoItem"
import AddTodo from "./addTodo/AddTodo"

const TodoWrap = () => {
    const[flag,setFlag] = useState(false)
    const [todos, setTodos] = useState([])


    const sortByExpDate = (data) => {
      let sortedTodos=  data.sort(function(a, b) {
            return new Date(a.expDate) - new Date(b.expDate); 
          });

        return sortedTodos;
    }


    useEffect(()=>{
        fetch("http://localhost:3000/todos")
        .then((res)=>res.json())
        .then((data)=>sortByExpDate(data))
        .then((data)=>setTodos(data))
        .then(()=>setFlag(false))
    },[flag])
    

  return (
    <div className="row justify-content-center g-5">

        <div className="col-lg-2 p-0 mx-3">
            <div className="bg-white rounded-3">
              <img className="img-fluid mt-2 todoImg" src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=1380&t=st=1685716331~exp=1685716931~hmac=d92bdac9f1035d8cecb22821e7854c6d4a7c82193d774b03abfad4937fe1bad8" alt="" />
                <AddTodo setFlag={setFlag}/>
            </div>
        </div>
        <div className="col-lg-9">
            {todos&& todos?.map((todo)=> <TodoItem key={todo.id} todo={todo} setFlag={setFlag} /> )}
        </div>
        
    </div>
  )
}

export default TodoWrap