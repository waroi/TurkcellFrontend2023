import styled from "styled-components";

export const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
`;
export const MainDIV = styled.div`
  background-color: ${(props) => (props.theme == "light" ? "#fff" : "#000")};
  color: ${(props) => (props.theme == "light" ? "#000" : "#fff")};
`;
