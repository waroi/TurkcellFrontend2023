import Proptype from 'prop-types'
import "./todoItem.css"
import { useState } from 'react'


const TodoItem = ({todo,setFlag}) => {
    const [todos,setTodos]=useState({
        id:todo.id,
        title:todo.title,
        isDone:todo.isDone,
        expDate:todo.expDate
    })
    const [isDone, setIsDone] = useState(todo.isDone)
    const [isEdit, setIsEdit] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [date, setDate] = useState(betweenDatesCalculation(new Date(),new Date(todos.expDate)))
    let today = new Date().toISOString().substring(0,10);
    

    const handleChange = (e) => {
        setTodos({ ...todos, [e.target.name]: e.target.value });
      };


      const handleDone = () => {
        fetch(`http://localhost:3000/todos/${todos.id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({isDone:!todos.isDone})
        }).then((res)=>res.json()).then(()=>setIsDone(!isDone))
    }


    const handleDelete = () => {
        fetch(`http://localhost:3000/todos/${todos.id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=>res.json()).then(()=>setFlag(true))
    }




    function betweenDatesCalculation(tarih1, tarih2) {
        let date1 = new Date(tarih1);
        let date2 = new Date(tarih2);
        
        let diff = date2.getTime() - date1.getTime();
    
        let gunSayisi = Math.ceil(diff / (1000 * 60 * 60 * 24)); 
    
        return gunSayisi;
    }

    const editOn = () => {
        console.log("edit on")
        setIsEdit(true)
    }

    const editDone = () => {
        setIsEdit(false)
        todo.title !==todos.title && fetch(`http://localhost:3000/todos/${todos.id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({title:todos.title})
        }).then((res)=>res.json()).then(()=>setFlag(true))
        todo.expDate !==todos.expDate && fetch(`http://localhost:3000/todos/${todos.id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({expDate:todos.expDate})
        }).then((res)=>res.json()).then(()=>setFlag(true)).then(()=>setDate(betweenDatesCalculation(new Date(),new Date(todos.expDate))))
    }



  return (
    
        <div className={`rounded-3 bg-white py-2 row justify-content-between align-items-center mb-3 ${date<0 &&"border border-2 border-danger"}`}>    
            <input className='col-lg-8 col-sm-12 titleCut text-start m-0 border-0' name='title' type="text"
             readOnly={isEdit?false:true} value={todos.title}  onClick={editOn} onChange={handleChange} onBlur={editDone}/>


            <div className='col-lg-2 col-sm-6 py-lg-0 py-sm-2 text-start'>
                <input className='border-0' name='expDate' type="date" min={today} value={todos.expDate} readOnly={isEdit?false:true}  onClick={editOn} onChange={handleChange} onBlur={editDone}/>
                <p className='m-0'>({ date<0 ? "Tarihi Geçti" : date + " Gün Kaldı"})</p>
                </div>
            <div className='col-lg-2 col-sm-6 text-lg-center text-sm-end'>
                <button className='bg-transparent border-0' onClick={handleDone}>{isDone?<i className="fa-regular fa-circle-check fa-lg" style={{color:"#ca8bfe"}}></i>:<i className="fa-regular fa-circle fa-lg" style={{color:"#717082"}}></i>}</button>
                <span>|</span>
                <button className='bg-transparent border-0' onClick={handleDelete}><i className="fa-solid fa-trash" style={{color:"#fd99af"}}></i></button>
            </div>

        </div>
    
  )
}

TodoItem.propTypes = {
    todo: Proptype.shape({
        id: Proptype.string,
        title: Proptype.string,
        isDone: Proptype.bool,
        expDate:Proptype.string
    }),
    setFlag:Proptype.func
}

export default TodoItem