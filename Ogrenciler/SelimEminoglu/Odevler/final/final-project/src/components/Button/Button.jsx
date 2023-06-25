import { ButtonStyle } from "./styleButton";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Button({
  title,
  path,
  icon,
  border,
  background,
  color,
  gap,
  display,
  width,
  padding,
}) {
  return (
    <ButtonStyle
      color={color}
      padding={padding}
      gap={gap}
      display={display}
      background={background}
      border={border}
      width={width}
    >
      {path == "/" && title}
      {path != "/" && <Link to={path}>{title}</Link>}
      {icon != "" && <img src={icon} alt="icon" />}
    </ButtonStyle>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  icon: PropTypes.string,
  border: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  gap: PropTypes.string,
  display: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
};

Button.defaultProps = {
  path: "/",
  icon: "",
  border: "1px solid transparent",
  background: "#003459",
  color: "white",
  gap: "10px",
  display: "flex",
  width: "161px",
  padding: "14px 28px 10px 28px",
};

export default Button;
