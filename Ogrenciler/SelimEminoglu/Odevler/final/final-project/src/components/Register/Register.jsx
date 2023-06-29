import { Link } from "react-router-dom";
import { RegisterDiv, RegisterP } from "./styleRegister";
import PropTypes from "prop-types";

function Register({ path }) {
  return (
    <Link to={path}>
      <RegisterDiv>
        <img src=".\src\assets\icons\register_icon.svg" alt="icon" />
        <RegisterP>Kayıt Ol</RegisterP>
      </RegisterDiv>
    </Link>
  );
}

Register.proptypes = {
  path: PropTypes.string,
};

Register.defaultProps = {
  path: "/register",
};

export default Register;
