import React from "react";
import PropTypes from "prop-types";

const Task = ({ fName, lName, age }) => {
  return (
    <div>
      Merhaba {fName + " " + lName}. {age} yaşındasınız.
    </div>
  );
};

Task.propTypes = {
  fName: PropTypes.string.isRequired,
  lName: PropTypes.string.isRequired,
  age: PropTypes.number,
};

Task.defaultProps = {
  fName: "John",
  lName: "Doe",
};

export default Task;
