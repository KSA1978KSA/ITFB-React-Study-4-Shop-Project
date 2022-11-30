import React from "react";

import "./css/ButtonSimple.css";

function ButtonSimple(props: any) {
  return (
    <div className="button-simple" style={{ background: props.buttonColor }}>
      <div
        className="button-simple__text"
        style={{ color: props.textColor, fontSize: props.textSize }}
      >
        {props.buttonText}
      </div>
    </div>
  );
}
export { ButtonSimple };
