import PropTypes from "prop-types";

const Deneme = ({ isim }) => {
  return <div>Merhaba {isim} </div>;
};

export default Deneme;

Deneme.propTypes = {
  isim: PropTypes.string.isRequired,
};

Deneme.defaultProps = {
  isim: "İsimsiz",
};
