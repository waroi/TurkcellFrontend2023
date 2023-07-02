/* eslint-disable react/prop-types */
import ButtonSecondaryStyle from "./ButtonSecondaryStyle";

const Button = (props) => {
  const value = props.value;

  return <ButtonSecondaryStyle>{value}</ButtonSecondaryStyle>;
};

export default Button;
