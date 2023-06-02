import PropTypes from "prop-types";
const ListItem = ({ student, index }) => {
  return (
    <li style={{ listStyle: "none" }}>
      {student} - {index}
    </li>
  );
};

ListItem.PropTypes = {
  student: PropTypes.string.isRequired,
};

export default ListItem;

//componentlerin yaşam döngülerini araştır
