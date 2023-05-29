import PropTypes from "prop-types";

const ListItem = ({ student, index }) => {
  return (
    <li style={{ listStyle: "none" }}>
      {student} - {index}
    </li>
  );
};

ListItem.propTypes = {
  student: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ListItem;
