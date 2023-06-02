import PropTypes from 'prop-types'
import { useState } from 'react'
import './listtasks.css'
import UpdateTask from '../UpdateTask/UpdateTask'
import Icons from '../Icons/Icons'

const ListTasks = ({ singleTask }) => {
  const [isUpdate, setIsUpdate] = useState(false)

  function doneTask(e) {
    if (e.target.classList.contains('singleItem')) {
      e.target.classList.toggle('done');
      if (e.target.classList.contains('done')) {
        updateDoneTask4JsonServer(e.target.id, 'done')
      }
      else {
        updateDoneTask4JsonServer(e.target.id, '')
      }
    }
  }

  function updateDoneTask4JsonServer(id, done) {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: done })
    })
      .then(res => res.json())
  }

  const changeIsUpdate = () => {
    setIsUpdate(!isUpdate);
  }

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        marginTop: '.7rem',
      }}
        className={`singleItem ${singleTask.status}`}
        id={singleTask.id}
        onClick={isUpdate ? null : doneTask}
      >
        {
          isUpdate ?
            <UpdateTask singleTask={singleTask} changeIsUpdate={changeIsUpdate} />
            :
            <span className='taskName'>{singleTask.task}</span>
        }
        <Icons changeIsUpdate={changeIsUpdate} />
      </div>
    </div>
  )
}

ListTasks.propTypes = {
  singleTask: PropTypes.object
}

export default ListTasks
