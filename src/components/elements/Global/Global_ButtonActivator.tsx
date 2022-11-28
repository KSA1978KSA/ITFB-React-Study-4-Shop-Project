import React from "react";

import "./css/Global_ButtonActivator.css";

function Global_ButtonActivator(props: any) {
  return (
    <div className="Global__StaticButton">
      <div className="Global__StaticButtonText">{props.buttonText}</div>
    </div>
  );
}
export { Global_ButtonActivator };
