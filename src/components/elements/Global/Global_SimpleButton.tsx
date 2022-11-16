import React from "react";

import "./css/Global_SimpleButton.css";

function Global_SimpleButton(props: any) {
  return (
    <div
      className="Global__SimpleButton"
      style={{ background: props.buttonColor }}
    >
      <div
        className="Global__SimpleButtonText"
        style={{ color: props.textColor, fontSize: props.textSize }}
      >
        {props.buttonText}
      </div>
    </div>
  );
}
export { Global_SimpleButton };
