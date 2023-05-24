import React from 'react';
import PropTypes from 'prop-types';


const Deneme = ({ name, grupname, eleman }) => {
  return (
    <div>
      <h1>  🌚 Merhaba  🌝 </h1>
      <h3>{name}</h3>
      <div>{eleman} kişilik grubunuz {grupname} 'e Hoşgeldiniz!</div>
    </div>
  )
}

Deneme.propTypes = {
  name: PropTypes.string.isRequired,
  grupname: PropTypes.string.isRequired,
  eleman: PropTypes.number
}

Deneme.defaultProps = {
  name: "İsim Yok",
  grupname: "Grup Yok",

}
export default Deneme