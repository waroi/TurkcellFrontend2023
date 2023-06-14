import styled from "styled-components";

export const JokeControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  select,
  option {
    text-transform: capitalize;
    color: black;
  }

  select {
    border-radius: 10px;
    padding: 1rem;
    font-size: 1.25rem;
  }
`;
