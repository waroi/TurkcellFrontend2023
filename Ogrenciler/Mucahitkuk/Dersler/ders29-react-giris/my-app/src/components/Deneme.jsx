import React from 'react'
import PropTypes from 'prop-types'

const Deneme = ({car}) => {
  const {type, model} = car
  return (
    <div>Arabanızın markası: {type} ve modeli: {model}</div>
  )
}

Deneme.propTypes = {
  car: PropTypes.shape({
    type: PropTypes.string.isRequired,
    model: PropTypes.number.isRequired,
  }).isRequired,
}



// Proplar alt komponentlara yapılır tek yönlüdür, üste doğru yapılamaz

export default Deneme