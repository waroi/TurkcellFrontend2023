import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ emp }) => {
  return (
    <div>
      {/* <li>{student}</li> */}
      {/* <div>{emp}</div> */}
      <li>{emp}</li>
    </div>
  );
};
// ListItem.propTypes = {
//   isim: PropTypes.string.isRequired,
// };

export default ListItem;
