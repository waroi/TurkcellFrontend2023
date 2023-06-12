import styled from "styled-components";



const ErrorText = styled.h2`
  opacity: ${props => props.error === "true" ? 1 : 0};
  color: tomato;
  text-align: center;
  margin: 1rem;
`

export {ErrorText}