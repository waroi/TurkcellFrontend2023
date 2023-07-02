/* eslint-disable react/prop-types */
import ButtonStyle from "./ButtonStyle";

const Button = (props) => {
  const value = props.value;

  return <ButtonStyle>{value}</ButtonStyle>;
};

export default Button;
