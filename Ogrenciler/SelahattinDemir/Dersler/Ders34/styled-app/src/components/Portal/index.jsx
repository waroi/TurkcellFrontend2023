import ReactDOM from "react-dom";

const index = ({ target, text, handlePortalClick }) => {
  return ReactDOM.createPortal(
    <div onClick={handlePortalClick}>Selam dünyalı ben Portal Conmponenti, hedefim ise {text}</div>,
    target
  );
};

export default index;
