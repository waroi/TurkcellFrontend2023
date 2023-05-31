import PropTypes from "prop-types";

const ListItem = ({ student, indexdeger }) => {
  return (
    <li>
      {student}'s index degeri: {indexdeger}
    </li>
  );
};

ListItem.propTypes = {
  student: PropTypes.string.isRequired,
  indexdeger: PropTypes.number.isRequired,
};
export default ListItem;
