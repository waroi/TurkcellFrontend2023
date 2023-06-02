import { useState } from 'react';
import PropTypes from 'prop-types'
import './singleitem.css'
const SingleItem = ({ singleTask }) => {
  const [isUpdate, setIsUpdate] = useState(false);
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

  const deleteItem = (e) => {
    const item = e.target.parentElement.parentElement;
    item.remove();
    fetch(`http://localhost:3000/tasks/${item.id}`, {
      method: 'DELETE'
    })
  }

  const changeIsUpdate = () => {
    setIsUpdate(!isUpdate);
  }

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
    singleTask.task = updatedTask
    e.preventDefault();
  }
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <li style={{
        listStyle: 'none',
        marginTop: '.7rem',
      }}
        className={`singleItem ${singleTask.status}`}
        id={singleTask.id}
        onClick={isUpdate ? null : doneTask}
        >
        {
          isUpdate ? <div style = {{width: '80%'}}>
            <input type="text"
              defaultValue = {singleTask.task}
              style = {{ border: 'none', outline: 'none', borderRadius: '7px', padding: '5px 10px', width: '80%' }} />
            <a href='#' style = {{ textDecoration: 'none', color: '#000000', marginLeft: '2rem' }} onClick={updateTask}>Güncelle</a>
          </div> : singleTask.task
        }

        {/* Iconlar yeni bir component kullanılarak çekilebilir. */}
        <div className='icons'>
          <span className='fa-solid fa-pen' onClick={changeIsUpdate}></span>
          <span className='fa-solid fa-trash' onClick={deleteItem}></span>
        </div>
      </li>
    </div>
  )
}

SingleItem.propTypes = {
  singleTask: PropTypes.object
}

export default SingleItem
