import styled from "styled-components";

export const Td = styled.td`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  text-align: end;
  cursor: pointer;
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding: 1rem;
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

export const Th = styled.th`
  text-align: end;
  cursor: pointer;
`;
