import React from 'react'
import PropType from "prop-types";

const ListItem = ({user}) => {
  const {id, name, surname, age} = user;

  return (
    <li onClick={() => console.log(id)} id={id}>
    <div>{name}</div>
    <div>{surname}</div>
    <div>{age}</div>
    </li>
  )
}

export default ListItem;

ListItem.propTypes = {
  user: PropType.shape({
    id: PropType.number.isRequired,
    name: PropType.string.isRequired,
    surname: PropType.string.isRequired,
    age: PropType.number.isRequired
  })
}