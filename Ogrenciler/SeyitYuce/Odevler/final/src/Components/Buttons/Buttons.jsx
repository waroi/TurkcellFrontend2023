import React from "react";
import "./Buttons.css";

const Buttons = ({ variation, onClick, children, icon, className }) => {
  const handleClick = () => {
    onClick(variation);
  };

  const classNames = `button ${variation} ${className}`;

  return (
    <button className={classNames} onClick={handleClick}>
      {variation.includes("textIconLeft") && icon && (
        <span className="icon">{icon}</span>
      )}
      {variation.includes("textOnly") && <span className="text"></span>}
      {children}
      {variation.includes("iconOnly") && icon && (
        <span className="icon">{icon}</span>
      )}
      {variation.includes("textIconRight") && icon && (
        <span className="icon">{icon}</span>
      )}
    </button>
  );
};

export default Buttons;
