import PropTypes from "prop-types";

const Listİtem = ({ student }) => {
  return <li>{student}</li>;
};

Listİtem.prototype = {
  student: PropTypes.string.isRequired,
};

export default Listİtem;
