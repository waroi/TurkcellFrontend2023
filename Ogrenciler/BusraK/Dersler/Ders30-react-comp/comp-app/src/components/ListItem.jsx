import React from "react";
import PropTypes from "prop-types";

export const ListItem = ({ student }) => {
  return <li>{student}</li>;
};

//rafc tab

ListItem.propTypes = {
  student: PropTypes.string.isRequired,
};
