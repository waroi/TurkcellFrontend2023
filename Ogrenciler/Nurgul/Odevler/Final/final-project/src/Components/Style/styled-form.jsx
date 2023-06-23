import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    height: 30px;
    border: 1px solid #667479;
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 5px;
  }

  .error {
    color: #ff564f;
    margin-bottom: 10px;
  }

  button {
    padding: 5px 5px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
