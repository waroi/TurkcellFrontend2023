import React from "react";
import ReactDOM from "react-dom";

const Deneme = ({ target, text }) => {
  return ReactDOM.createPortal(<div>hello world{text}</div>, target);
};

export default Deneme;
