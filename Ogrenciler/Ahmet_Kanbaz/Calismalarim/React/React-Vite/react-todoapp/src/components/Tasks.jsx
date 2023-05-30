import './tasks.css'
import PropTypes from 'prop-types'
function Tasks({task}) {

  const deleteTask = (e) => {
    e.target.parentNode.remove();
  }


  function doneTask(e) {
    e.target.classList.toggle('done');
  }

  return (
    <li className='mt-2 rounded-4 py-2 px-3'
      style = {{
        listStyle: 'none',
      }}
      onClick={doneTask}>
      {task}
      <span className="float-end fa-solid fa-xmark pt-1" onClick={deleteTask}></span>
    </li>
  )
}

Tasks.propTypes = {
  task: PropTypes.string.isRequired,
}

export default Tasks
