import { styled } from "styled-components";
import { font } from "../Home/HomeStyle";
import background from "../../img/background.jpeg";

export const FormStyle = styled.div`
  position: relative;
  z-index: 1;
  background-color: transparent;
  border: 1px solid gray;

  padding: 1em;
  border-radius: 5px;
  margin: auto;
  .formTitle {
    ${font({
      color: "#003459",
      size: "1rem",
      weight: "700",
      lineHeight: "1.5rem",
    })}
  }
  .input {
    border: 1px solid gray;
    width: 100%;
    padding: 0.5em 1em;
    border-radius: 5px;
  }
  .error {
    color: red;
  }
  .input-error {
    color: red;
  }
`;
export const SignUpWrap = styled.div`
  height: auto;
  h1 {
    color: #003459;
    font-size: 56px;
  }
  padding: 2em;
  border-radius: 5px;
  background-image: url(${background});
  border: none;

  background-repeat: no-repeat;

  @media screen and (max-width: 992px) {
    h1 {
      font-size: 43px;
    }
  }
`;
