import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({students}) => {
  return (
   <li>{students}</li>
  )
};

ListItem.propTypes = {
  students: PropTypes.string.isRequired
}


export default ListItem
