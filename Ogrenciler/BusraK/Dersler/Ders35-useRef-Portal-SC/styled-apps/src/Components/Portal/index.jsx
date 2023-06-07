import ReactDOM from "react-dom";

const index = ({ target, text }) => {
  return ReactDOM.createPortal(<div>index {text} </div>), target;
};

export default index;
