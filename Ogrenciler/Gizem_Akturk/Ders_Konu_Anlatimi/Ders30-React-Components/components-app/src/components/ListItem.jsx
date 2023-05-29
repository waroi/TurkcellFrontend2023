import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ student }) => {
  return <li>{student}</li>;
};

ListItem.propTypes = {
  student: PropTypes.string.isRequired,
};

export default ListItem;
