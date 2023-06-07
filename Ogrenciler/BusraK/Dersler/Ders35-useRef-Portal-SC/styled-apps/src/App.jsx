// import styled from "styled-components";
// import { Portal } from "./Components/Portal";
// import { useRef } from "react";
// import "./App.css";

// function App() {
//   const divRef = useRef(null);
//   //neden null oldu?

//   const Button = styled.button`
//     background-color: red;
//     color: white;
//     border-radius: 5px;
//     padding: 10px;
//     margin: 10px;
//     border: none;
//     font-size: 20px;
//     font-weight: bold;
//     &:hover {
//       background-color: blue;
//       color: white;
//     }
//     &:active {
//       background-color: green;
//       color: white;
//     }
//     &:focus {
//       outline: none;
//     }
//   `;

//   const Button2 = styled(Button)`
//     background-color: green;
//     color: white;
//     &:hover {
//       background-color: blue;
//       color: white;
//     }
//     &:active {
//       background-color: green;
//       color: white;
//     }
//     &:focus {
//       outline: none;
//     }
//   `;

//   const Button3 = styled(Button)`
//     background-color: blue;
//     font-size: ${(props) => props.fontSize};
//   `;
//   return (
//     <>
//       <div>
//         <button>deneme</button>
//         <Button2>deneme</Button2>
//         <button
//           onClick={() => console.log(divRef.current.textContent)}
//         ></button>
//         <div>buraya</div>
//         <div ref={divRef}>buraya ref deneme</div>
//         <Button3 fontSize="30px" onClick={() => console.log("denemeee")}>
//           deneme
//         </Button3>
//         <Portal target={document.body} text="deneme portalım body" />
//         Portal componentine tıkladığında yeri div elementinin içine gitsin hangi
//         compa getirilirse onun içine gitsin
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import ReactDOM from "react-dom";

const PortalComponent = () => {
  return ReactDOM.createPortal(
    <div className="portal-content">Bu içerik portal bileşenine ait.</div>,
    document.body // Portalın yerleştirileceği div
  );
};

const App = () => {
  return (
    <div>
      <h1>React Portal Örneği</h1>
      <div className="container">
        <h2>Normal Bileşen İçeriği</h2>
        <p>Bu içerik normal bileşene ait.</p>
      </div>
      <PortalComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
