/* eslint-disable react/prop-types */
import styled from "styled-components";
const Button = () => {
  const StyledButton = styled.button`
    width: 100px;
    height: 40px;
    background: rgba(255, 255, 255, 0.09);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
    border: 1px solid rgba(255, 255, 255, 1);
    color: white;
  `;

  return (
    <div>
      <StyledButton type="submit">Search</StyledButton>
    </div>
  );
};

export default Button;
