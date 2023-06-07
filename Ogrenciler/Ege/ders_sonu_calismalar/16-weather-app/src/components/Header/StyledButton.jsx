import styled from "styled-components";

const StyledButton = () => {
  const Button = styled.button`
    padding: 0 15px;
    border-radius: 6px;
    border: 2px solid #b0b0b6;
    cursor: pointer;
  `;

  return <Button type="submit">Ara</Button>;
};

export default StyledButton;
