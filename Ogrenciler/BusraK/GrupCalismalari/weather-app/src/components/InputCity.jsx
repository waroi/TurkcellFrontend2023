import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: center;
  gap: 20px;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledInput = styled.input`
  border-radius: 10px;
  outline: 2px solid #febf00;
  border: 0;
  width: 20%;
  height: 50px;

  background-color: #e2e2e2;
  outline-offset: 3px;
  padding: 10px 1rem;
  transition: 0.25s;
  padding: 0 20px;
  font-size: 20px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  outline: none;
  &:focus {
    outline-offset: 5px;
    background-color: #fff
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #003566;
  color: #000;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0px #000;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #ff5252;
    border: 2px solid #ff5252;
    box-shadow: 5px 5px 0px #ff5252;
  }

  &:active {
    background-color: #fcf414;
    box-shadow: none;
    transform: translateY(4px);
  }
`;

function InputCity({ value, change, submit }) {
  return (
    <>
      <StyledForm onSubmit={submit}>
        <StyledInput
          type="text"
          value={value}
          onChange={change}
          placeholder="Enter city name"
        />
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>
    </>
  );
}

export default InputCity;
