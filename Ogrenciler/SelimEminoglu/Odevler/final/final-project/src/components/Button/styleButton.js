import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: ${(props) => props.display};
  height: 44px;
  width: 161px;
  padding: 14px 28px 10px 28px;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
  border-radius: 57px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
`;
