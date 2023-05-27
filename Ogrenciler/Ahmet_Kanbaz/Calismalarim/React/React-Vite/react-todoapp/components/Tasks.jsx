import './tasks.css'
// eslint-disable-next-line react/prop-types
function Tasks({task}) {

  const deleteTask = () => {
    const itemTask = document.getElementsByClassName('list-group-item');
    console.log(itemTask)
  }

  return (
    <li className="list-group-item">
      {task}
      <span className="float-end fa-solid fa-xmark" onClick={deleteTask}></span>
    </li>
  )
}

export default Tasks
