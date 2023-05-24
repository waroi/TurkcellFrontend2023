import React from "react";
import PropTypes from "prop-types";

const Greeting = ({ name, surname, age }) => {
  return (
    <div>
      Merhaba {name + " " + surname}. {age} Yaşındasın
    </div>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

Greeting.defaultProps = {
  name: "İsim Girilmedi",
  surname: "Soyisim Girilmedi",
  age: 0,
};

export default Greeting;
