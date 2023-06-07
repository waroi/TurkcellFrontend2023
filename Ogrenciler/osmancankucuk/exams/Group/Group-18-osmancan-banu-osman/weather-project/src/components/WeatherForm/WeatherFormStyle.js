import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5em;
  color: white;
  margin-top: 1em;
  background-color: rgb(58, 127, 211);
  border-radius: 5px;
  border: 1px solid white;

  width: 150px;
  &:hover {
    background-color: white;
    color: rgb(58, 127, 211);
    border: 1px solid rgb(58, 127, 211);
  }
`;
export const WeatherInput = styled.input`
  padding: 0.5em;
  border-radius: 5px;
  width: 50%;
  border: none;
  &:focus {
    outline: none;
  }
`;
export const Box = styled.div`
  background: rgba(255, 255, 255, 0.36);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1em;
`;
export const Error = styled.div`
  background-color: rgba(189, 50, 50, 0.899);
  color: white;
  margin-top: 1em;
  border-radius: 5px;
  padding: 1em;
  width: 50%;
`;
