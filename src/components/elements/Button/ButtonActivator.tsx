import React from "react";

import "./css/ButtonActivator.css";

function ButtonActivator(props: any) {
  return (
    <div className="button-activator">
      <div className="button-activator__text">{props.buttonText}</div>
    </div>
  );
}
export { ButtonActivator };
