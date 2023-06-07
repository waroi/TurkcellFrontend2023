import styled from "styled-components";
import "./App.css";

function App() {
  const Button = styled.button`
    background-color: red;
    color: white;
    font-size: 1rem;
    border-radius: 0.5rem;
  `;

  const PrimaryButton = styled(Button)`
    background-color: blue;
    font-size: ${(props) => props.size}px;
  `;

  return (
    <>
      <h1>Styled Components</h1>
      <button>Deneme 1</button>
      <Button>Deneme 2</Button>
      <PrimaryButton size="30">Deneme 3</PrimaryButton>
    </>
  );
}

export default App;
