import { useState } from "react"
import "./addTodo.css"

// eslint-disable-next-line react/prop-types
const AddTodo = ({setFlag}) => {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")


    let today = new Date().toISOString().substring(0,10);

    const formSubmit = (e) => {
        e.preventDefault()

        const newTodo = {
            title,
            expDate:date,
            isDone:false,
            id:self.crypto.randomUUID()
    }

    fetch("http://localhost:3000/todos",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newTodo)
    }).then((res)=>res.json()).then(()=>setFlag(true))


    // eslint-disable-next-line no-undef
    const modal = bootstrap.Modal.getInstance(document.getElementById("todo"));
    modal?.hide();
  
  
  }



  return (
    <div className="py-3">
        <button type="button" className="btn addTodoBtn" data-bs-toggle="modal" data-bs-target="#todo">Todo Ekle</button>



        <div className="modal fade" id="todo" tabIndex="-1" aria-labelledby="todoLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="todoLabel">Todo Ekle</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form onSubmit={formSubmit}>
              <div className="modal-body">
              <div className="mb-3 text-start">
                <label htmlFor="title" className="form-label">Todo</label>
                <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="date" value={date} className="form-label">Son Tarih</label>
                <input type="date" className="form-control" id="date" min={today} onChange={(e)=>setDate(e.target.value)}/>
              </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                <button type="submit" className="btn btn-primary">Kaydet</button>
              </div>
              </form>
            </div>
          </div>
        </div>
        </div>
  )
}

export default AddTodo