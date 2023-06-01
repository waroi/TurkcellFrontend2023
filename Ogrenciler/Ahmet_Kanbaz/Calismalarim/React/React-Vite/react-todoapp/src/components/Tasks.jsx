import './tasks.css'
import PropTypes from 'prop-types'
function Tasks({task}) {

  const deleteTask = (e) => {
    const allTasks = JSON.parse(localStorage.getItem('tasks'));
    allTasks.map((item, index) => {
      if(item.id === task.id) {
        allTasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(allTasks));
        e.target.parentElement.remove();
      }
    });
  }


  function doneTask(e) {
    if(e.target.classList.contains('taskItemLi')) {
      e.target.classList.toggle('done');
      if(e.target.classList.contains('done')) {
        doneTaskInLocalStorage(e.target.id, 'done');
      }
      else {
        doneTaskInLocalStorage(e.target.id, '');
      }
    }
  }

  function doneTaskInLocalStorage(id, status) {
    const allTasks = JSON.parse(localStorage.getItem('tasks'));
    allTasks.map((item) => {
      if(item.id == id) {
        item.isCompleted = status;
      }
      return item;
    });
    localStorage.setItem('tasks', JSON.stringify(allTasks));
  }

  return (
    <li className={`mt-2 rounded-4 py-2 px-3 taskItemLi ${task.isCompleted}`}
      style = {{
        listStyle: 'none',
      }}
      id={task.id}
      onClick={doneTask}>
      {task.text}
      <span className="float-end fa-solid fa-xmark pt-1" onClick={deleteTask}></span>
    </li>
  )
}

Tasks.propTypes = {
  task: PropTypes.object.isRequired,
}

export default Tasks
