import PropTypes from 'prop-types';

const ListItems = ({student, index}) => {
  return (
    <li style={{ listStyle: 'none', color: 'red', fontSize: '16px', padding: '10px'}}>{student} - {index}</li>
  )
}

ListItems.propTypes = {
  student: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}


export default ListItems;