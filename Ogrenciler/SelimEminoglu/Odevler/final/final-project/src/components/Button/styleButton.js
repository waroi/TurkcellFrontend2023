import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  height: 44px;
  padding: 14px 28px 10px 28px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 57px;
  background: ${(props) => props.background};
`;
