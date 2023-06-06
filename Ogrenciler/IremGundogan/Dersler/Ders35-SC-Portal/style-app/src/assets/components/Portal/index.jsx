import ReactDom from "react-dom";

const index = ({ target, text }) => {
  return ReactDom.createPortal(
    <div>Selam dünyalı ben Portal Componenti , hedefim ise {text}</div>,
    target
  );
};

export default index;
