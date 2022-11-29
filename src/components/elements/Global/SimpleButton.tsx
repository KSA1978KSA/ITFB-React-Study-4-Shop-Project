import React from "react";

import "./css/SimpleButton.css";

function SimpleButton(props: any) {
  return (
    <div className="simple-button" style={{ background: props.buttonColor }}>
      <div
        className="simple-button__text"
        style={{ color: props.textColor, fontSize: props.textSize }}
      >
        {props.buttonText}
      </div>
    </div>
  );
}
export { SimpleButton };
