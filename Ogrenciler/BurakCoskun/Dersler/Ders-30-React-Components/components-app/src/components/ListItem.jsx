import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ student }) => {
  return (
    <div>
      <li style={{ listStyle: "none" }}>{student}</li>
    </div>
  );
};

ListItem.propTypes = {
  student: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  student: "Öğrenci Girilmedi",
};

export default ListItem;
