import styled from "styled-components";
import { font } from "../Home/HomeStyle";

export const ContactForm = styled.div`
  border: none;
  padding: 2em 1em;

  color: white;
  input {
    border: 1px solid gray;
    width: 100%;
    padding: 0.5em 1em;
    border-radius: 5px;
  }
  textarea {
    width: 100%;
    height: 200px;
    resize: none;
    overflow: scroll;
  }
`;
export const ContactInfo = styled.div`
  padding: 2em 1em;

  color: white;
  .contactParagraph {
    border: 1px solid white;
    padding: 1em;
    background-color: white;

    color: black;
    border-radius: 10px;
  }
  .contactText {
    ${font({
      color: "black",
      size: "1.25rem",
      weight: "500",
      lineHeight: " 1.75rem",
    })};
  }
  .contactList {
    li {
      ${font({
        color: "black",
        size: "1rem",
        weight: "600",
        lineHeight: " 1.75rem",
      })};
    }
  }
`;
