import React from 'react'
import PropTypes from 'prop-types'

const Try = ({name,surname,age,job}) => {
  return (
    <div>
        Hi {name} {surname} {age} {job}
    </div>
  )
}

Try.propTypes = {
    name:PropTypes.string.isRequired,
    surname:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    job:PropTypes.string
}

Try.defaultProps = {
    name:"İsim yok",
    surname:"Soyad yok",
 }

export default Try