import React from "react";
import { useRef, useEffect } from "react";
import Tooltip from "bootstrap/js/dist/tooltip";
const ToolTip = ({ todos }) => {
  const tooltipRef = useRef();
  useEffect(() => {
    var tooltip = new Tooltip(tooltipRef.current, {
      title:
        todos.length +
        " todo var \n" +
        todos.filter((todo) => todo.completed).length +
        " tamamlanan todo var \n  " +
        todos.filter((todo) => !todo.completed).length +
        "\n tamamlanmayan todo var" +
        todos.filter((todo) => todo.important).length +
        " önemli todo var",

      placement: "top",
      trigger: "hover",
    });
  });

  return (
    <div className="py-2">
      <button className="btn btn-info" ref={tooltipRef}>
        Todo's info
      </button>
    </div>
  );
};

export default ToolTip;
