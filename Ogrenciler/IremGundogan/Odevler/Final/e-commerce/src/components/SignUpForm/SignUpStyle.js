import styled from "styled-components";

const Form = styled.form`
  max-width: 500px;
  margin: 50px auto;
  
  .title {
    color: #003459;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  textarea {
    height: 75px;
    overflow: hidden;
  }

  input,
  textarea {
    width: 100%;
    height: 50px;
    border-radius: 8px;
    border: 2px solid #99a2a5;
    padding: 28px 14px;
    margin-bottom: 10px;
    &::placeholder {
      color: #99a2a5;
    }
  }

  label {
    color: #242b33;
  }

  .error {
    gap: 0.5rem;
    color: #ff564f;
  }
`;

export default Form;
