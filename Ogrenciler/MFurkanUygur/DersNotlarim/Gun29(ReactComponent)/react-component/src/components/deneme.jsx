import React from 'react'
import Proptypes from 'prop-types'
const deneme = ({isim , soyisim , yas}) => {
    return (
        <div>Merhaba {isim} {soyisim} {yas}</div>
    )
}

//Zorunlu türde bir girdi talebi
deneme.propTypes = {
    isim: Proptypes.string.isRequired,
    soyisim: Proptypes.string.isRequired,
    yas: Proptypes.number.isRequired
}
//Girilen bir değer olmayınca ekrana default değerler basmaca
deneme.defaultProps = {
    isim: "isim girilmedi",
    soyisim: "soyisim girilmedi",
    yas: "yaş girilmedi"
}
export default deneme
