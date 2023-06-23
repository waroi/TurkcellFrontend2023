import { ButtonStyle } from "./styleButton";
import PropTypes from "prop-types";

function Button({ title, icon, background }) {
  return (
    <ButtonStyle background={background}>
      {title}
      {icon != "" && <img src={icon} alt="icon" />}
    </ButtonStyle>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  background: PropTypes.string,
};

Button.defaultProps = {
  icon: "",
  background: "#003459",
};

export default Button;
