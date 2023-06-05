import React from 'react'
import PropTypes from 'prop-types'

const Deneme = ({isim ,surname , age }) => {
  return (
    <div>Merhaba {isim} {surname} { age} yasıında </div>
  );
};

Deneme.propTypes = { 
  isim: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.number
};

Deneme.defaultProps = {
  isim: "isim yok",
  surname: " surname yok",
};

export default Deneme;