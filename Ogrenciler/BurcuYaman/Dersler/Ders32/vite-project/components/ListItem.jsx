import PropTypes from 'prop-types';


const ListItem = ({student, index}) => {
  return (
    <li>  {student} {index}</li> 
  )
}

ListItem.prototype = {
    student: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}


export default ListItem
