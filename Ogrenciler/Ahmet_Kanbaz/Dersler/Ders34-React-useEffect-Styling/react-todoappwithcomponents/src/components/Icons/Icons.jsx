import PropTypes from 'prop-types'
import './icons.css'
const Icons = ({changeIsUpdate}) => {

  const deleteItem = (e) => {
    const item = e.target.parentElement.parentElement;
    item.remove();
    fetch(`http://localhost:3000/tasks/${item.id}`, {
      method: 'DELETE'
    })
  }

  return (
    <div className='icons'>
      <span className='fa-solid fa-pen' onClick={changeIsUpdate}></span>
      <span className='fa-solid fa-trash' onClick={deleteItem}></span>
    </div>
  )
}

Icons.propTypes = {
  changeIsUpdate: PropTypes.func
}

export default Icons
