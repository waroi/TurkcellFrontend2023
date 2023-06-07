import ReactDOM from "react-dom";

const index = ({ target, text }) => {
  return ReactDOM.createPortal(
    <div id="portal2">Saniyede Bilgi deneyim disiplin {text}</div>,
    target
  );
};

export default index;
