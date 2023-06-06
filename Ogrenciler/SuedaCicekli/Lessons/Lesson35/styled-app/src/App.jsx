
import styled from 'styled-components';
import './App.css';
import PropTypes from 'prop-types';
import Portal from "./components/Portal"
import { useRef } from 'react';

function App() {
  const Button = styled.button`
    background-color: red;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 20px;
  `;

  const PrimaryButton = styled(Button)`
    background-color: blue;
    font-size: ${(props) => props.size}px;
  `;

  const divRef = useRef(null);


  return (
    <>
      <h1>Styled Component</h1>
      <button onClick={() => console.log(divRef.current.textContent)}>Deneme1</button>
      <div ref={divRef}>buraya portal komponenti gelecek,, ref deneme yazısı</div> {/* useref ile dive ulaştıktan sonra bunun alt özelliklerine ulaşabiliri  */}
      <Button>Styled Component</Button>
      <PrimaryButton size={50} onClick={() => console.log("Deneme")}>Deneme 3</PrimaryButton>
      <Portal target={document.body} text="Body" />
      {/* targete ışınlanacak olan component */}
      {/* Portal componentine tıklandığında yeri yukarıdaki div elementi içerisinde olsun  */}
    </>
  );
}

App.propTypes = {
  size: PropTypes.number,
};



export default App;
