import PropTyes from 'prop-types'

const ListItemStudents = ({student, index}) => {
  return (
    <div>
      <li style={{listStyle: 'none'}}>
        {index + 1}. Öğrenci: {student}
      </li>
    </div>
  )
}

ListItemStudents.propTypes = {
  student: PropTyes.string.isRequired,
  index: PropTyes.number.isRequired,
}


export default ListItemStudents
