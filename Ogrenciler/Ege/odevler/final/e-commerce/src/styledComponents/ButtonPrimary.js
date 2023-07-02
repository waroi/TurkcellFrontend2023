import styled from "styled-components";

const ButtonPrimary = styled.button`
  color: white;
  background-color: #103559;
  padding: 14px;
  border: 2px solid #103559;
  border-radius: 57px;
  border: none;
  outline: none;
  &.disabled {
    background-color: #7f9eb2;
  }
`;

export default ButtonPrimary;
