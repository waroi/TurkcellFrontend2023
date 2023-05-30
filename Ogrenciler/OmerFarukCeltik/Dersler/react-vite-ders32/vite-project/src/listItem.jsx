import React from 'react'
import PropTypes from "prop-types"

const ListItem = ({student}) => {
  return (
    <div>
      <li>{student}</li>
    </div>
  )
}

export default ListItem