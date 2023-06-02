import PropTypes from 'prop-types'
import './updatetask.css'

const UpdateTask = ({singleTask, changeIsUpdate}) => {

  const updateTask = (e) => {
    const item = document.getElementById(singleTask.id);
    const input = item.querySelector('input');
    const updatedTask = input.value;
    fetch(`http://localhost:3000/tasks/${singleTask.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...singleTask, task: updatedTask })
    })
      .then(res => res.json())
    changeIsUpdate();
    singleTask.task = updatedTask;
    e.preventDefault();
  }

  return (
    <div style = {{width: '80%'}}>
      <input type="text"
      className='updateInput'
        defaultValue = {singleTask.task}
        style = {{ border: 'none', outline: 'none', borderRadius: '7px', padding: '5px 10px'}} />
      <a href='#' style = {{ textDecoration: 'none', color: '#000000'}} onClick={updateTask}>Güncelle</a>
    </div>
  )
}

UpdateTask.propTypes = {
  singleTask: PropTypes.object,
  changeIsUpdate: PropTypes.func
}

export default UpdateTask
