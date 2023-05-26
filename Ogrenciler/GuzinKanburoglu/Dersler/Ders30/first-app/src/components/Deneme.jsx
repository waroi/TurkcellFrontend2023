import React from 'react'
import Proptypes from 'prop-types'
export default function Deneme(props) {
  return (
    <div>Hello {props.isim} {props.soyisim} {props.yas}</div>
  )
}

Deneme.propTypes = {
    isim: Proptypes.string.isRequired,
    soyisim: Proptypes.string.isRequired,
    yas: Proptypes.number.isRequired
}
//Girilen bir değer olmayınca ekrana default değerler basmaca
Deneme.defaultProps = {
    isim: "isim girilmedi",
    soyisim: "soyisim girilmedi",
    yas: "yaş girilmedi"
}


