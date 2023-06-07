import ReactDOM from "react-dom";

const index = ({ target, text }) => {
  return ReactDOM.createPortal(
    <div>Merhaba portal component, my aim is {text} </div>,
    target
  );
};

export default index;
