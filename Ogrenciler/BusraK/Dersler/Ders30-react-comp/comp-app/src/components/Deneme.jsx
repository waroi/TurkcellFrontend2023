import React from "react";
import PropTypes from "prop-types";

const Deneme = ({ isim, surname, age }) => {
  return (
    <div>
      Merhaba {isim} {surname}, yaşın {age}
    </div>
  );
};

Deneme.propTypes = {
  isim: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

Deneme.defaultProps = {
  isim: "isim yok",
  surname: "soyisim yok",
  age: 0,
};

export default Deneme;
//rafce tab
