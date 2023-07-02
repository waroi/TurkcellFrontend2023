import React from "react";
import { StyledButton } from "./Button.style";
function StButton({ text, type, onClick, image }) {
  return (
    <StyledButton className={type} onClick={onClick}>
      {text}
      <img src={image} />
    </StyledButton>
  );
}

export default StButton;
