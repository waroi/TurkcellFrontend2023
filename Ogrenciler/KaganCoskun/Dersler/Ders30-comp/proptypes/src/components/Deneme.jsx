import React from 'react'
import PropTypes from 'prop-types'

const Deneme = ({name,surname,age}) => {
  return (
    <div>Merhaba {name} {surname}, Yaşınız {age}</div>
  )
}

Deneme.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

Deneme.defaultProps = {
    name: "İsismiz Yok",
    surname: "Soyisimiz Yok"
}

export default Deneme