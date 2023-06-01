import Proptype from 'prop-types'
import "./todoItem.css"


const TodoItem = ({todo}) => {
    console.log(todo)
  return (
    
        <div className='rounded-3 bg-white py-2 row justify-content-between align-items-center mb-3'>    
            <p className='col-lg-8 titleCut text-start m-0 '>{todo.title}</p>
            <p className='col-lg-3 m-0 ' >{todo.expDate}</p>
            <button className='col-lg-1 bg-transparent border-0'>{todo.isDone?<i className="fa-regular fa-circle-check"></i>:<i className="fa-regular fa-circle"></i>}</button>

        </div>
    
  )
}

TodoItem.propTypes = {
    todo: Proptype.shape({
        id: Proptype.string,
        title: Proptype.string,
        isDone: Proptype.bool,
        expDate:Proptype.string
    })
}

export default TodoItem