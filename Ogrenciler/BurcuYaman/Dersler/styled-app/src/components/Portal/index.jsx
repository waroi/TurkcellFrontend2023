import ReactDOM from "react-dom";

const index = ({ target, text }) => {
  return ReactDOM.createPortal(
    <div>Selam dünyalı ben Portal Conmponenti, hedefim ise {text}</div>,
    target
  );
};

export default index;
