import './tasks.css'
// eslint-disable-next-line react/prop-types
function Tasks({task}) {

  const deleteTask = (e) => {
    e.target.parentNode.remove();
  }
  

  return (
    <li className="list-group-item">
      {task}
      <span className="float-end fa-solid fa-xmark" onClick={deleteTask}></span>
    </li>
  )
}

export default Tasks
