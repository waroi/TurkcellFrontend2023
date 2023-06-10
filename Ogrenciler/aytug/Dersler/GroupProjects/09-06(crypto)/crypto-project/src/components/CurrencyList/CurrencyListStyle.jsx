import styled from "styled-components";

export const Td = styled.td`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  text-align: end;
`;

export const Th = styled.th`
  text-align: end;
`;
