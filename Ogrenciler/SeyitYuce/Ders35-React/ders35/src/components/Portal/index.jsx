import ReactDOM from "react-dom";
const index = ({ target, text }) => {
  return ReactDOM.createPortal(<div>Şimdi {text}</div>, target);
};

export default index;
