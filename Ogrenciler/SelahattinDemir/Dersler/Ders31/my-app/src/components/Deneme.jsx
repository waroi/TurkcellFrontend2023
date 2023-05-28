import React from 'react'
import PropType from "prop-types"

const Deneme = ({name="isim giriniz", surname, age}) => {
  return (
    <div>
      <h1>Merhaba {name} {surname} {age}</h1>
    </div>
  )
}

export default Deneme;

Deneme.propTypes = {
  name: PropType.string,
  surname: PropType.string.isRequired,
  age: PropType.number
}

Deneme.defaultProps = {
  surname: "Soyisim Girilmedi",
  age: "Yaş Girilmedi"
}