import ReactDOM from "react-dom";
const Portal = ({ target, text }) => {
  return ReactDOM.createPortal(
    <div>Selam dünyalı ben Portal Componenti, hedefim ise {text} </div>,
    target
  );
};

export default Portal;
