import styled from "styled-components";

const ButtonSecondaryStyle = styled.button`
  width: auto;
  height: 46px;
  border: 1.5px solid #003459;
  color: #003459;
  font-size: 16px;
  border-radius: 57px;
  gap: 10px;
  background: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  padding: 10px 30px;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background-color: #003459;
    color: #fff
  }
`;

export default ButtonSecondaryStyle;
