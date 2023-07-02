import styled from "styled-components"



export const Box = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 1em;
  border:none;
  @media screen and (min-width: 768px) {
    padding: 2em;
    border: 1px solid ${({ $bordercolor }) => $bordercolor};
  }
`