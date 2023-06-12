import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 1em;
`;
export const Grid = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 0.5fr 4fr 2fr 1fr 1fr 1fr 2fr 2fr;
  border-bottom: 1px solid
    ${(props) => (props.theme == "light" ? "#00000075" : "#ffffff78")};
  div {
    display: flex;
    gap: 0.5em;
    text-align: left;
    padding: 1.5em 0;
  }
  cursor: pointer;
  &:first-child {
    cursor: default;
  }
  &:not(:first-child):hover {
    background-color: ${(props) =>
      props.theme == "light" ? "#4d537235" : "#46464635"};
  }
  .symbol {
    font-weight: bolder;
    color: ${(props) => (props.theme == "light" ? "#00000050" : "#ffffff50")};
  }
  .icon {
    width: 1em;
    height: 1em;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
`;
export const CalculateColor = styled.div`
  font-weight: 600;
  color: ${(props) => (props.number > 0 ? "#16c784" : "#ea3943")};
`;
export const Loading = styled.div`
  text-align: center;
  padding: 1em;
  color: ${(props) => (props.theme == "light" ? "#000000" : "#ffffff")};
`;
