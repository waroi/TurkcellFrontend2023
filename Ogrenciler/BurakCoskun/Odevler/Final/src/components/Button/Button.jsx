import PropTypes from "prop-types";

const Button = ({ text, onClick, bgColor, width }) => {
  return (
    <button
      className={`btn btn-${bgColor} me-3 button py-2 px-2 px-xl-5 text-center ${width}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  width: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
