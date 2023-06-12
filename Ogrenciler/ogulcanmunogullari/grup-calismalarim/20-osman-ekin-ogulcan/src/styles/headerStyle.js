import styled from "styled-components";

export const StyledHeader = styled.header`
  div {
    z-index: 1;
    box-shadow: 0 0 1em 0
      ${(props) => (props.theme == "light" ? "#00000075" : "#ffffff78")};
    border-bottom: 1px solid
      ${(props) => (props.theme == "light" ? "#00000075" : "#ffffff78")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    h1 {
      display: flex;
      align-items: center;
      color: ${(props) => (props.theme == "light" ? "#000" : "#fff")};

      small {
        font-size: 0.5em;
        font-weight: bolder;
      }
    }
    .themeButton {
      cursor: pointer;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: ${(props) =>
        props.theme == "light" ? "#000" : "#fff"};
    }
  }
`;
export const Form = styled.form`
  padding: 3em;
  display: flex;
  justify-content: center;

  input {
    width: 35%;
    padding: 1em;
    border: none;
    border-radius: 1em;
    background-color: ${(props) => (props.theme == "light" ? "#fff" : "#000")};
    color: ${(props) => (props.theme == "light" ? "#000" : "#fff")};
    outline: none;
    box-shadow: 0 0 0.5em 0
      ${(props) => (props.theme == "light" ? "#00000075" : "#ffffff78")};
    border: 1px solid
      ${(props) => (props.theme == "light" ? "#6e6e6e" : "#cfcfcff")};
  }
`;
