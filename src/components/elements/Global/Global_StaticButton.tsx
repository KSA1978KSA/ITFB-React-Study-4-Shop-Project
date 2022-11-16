import React from "react";

import "./css/Global_StaticButton.css";

function Global_StaticButton(props: any) {
  return (
    <div className="Global__StaticButton">
      <div className="Global__StaticButtonText">{props.buttonText}</div>
    </div>
  );
}
export { Global_StaticButton };
