import React from "react";

import "./css/ButtonCloseble.css";
import icon_x from "../../../assets/pictures/icon_x.png";

function ButtonCloseble(props: any) {
  let jsxElement: JSX.Element;

  switch (props.buttonColor) {
    case "Green":
      jsxElement = (
        <div className="button-closeble-green">
          <div className="button-closeble-green__caption">
            {props.buttonText}
          </div>
          <img
            className="button-closeble-green__icon"
            src={icon_x}
            alt=""
            aria-hidden="true"
            data-noaft=""
          />
        </div>
      );
      break;

    default:
      jsxElement = (
        <div className="button-closeble-grayscale">
          <div className="button-closeble-grayscale__caption">
            {props.buttonText}
          </div>
          <img
            className="button-closeble-grayscale__icon"
            src={icon_x}
            alt=""
            aria-hidden="true"
            data-noaft=""
          />
        </div>
      );
      break;
  }

  return jsxElement;
}
export { ButtonCloseble };
