import ReactDOM from "react-dom";

const index = ({ target, text }) => {
  return ReactDOM.createPortal(
    <div>Selam Dünyalı ben Portal Componenti, hedefim ise {text}</div>,
    target
  );
};

export default index;
