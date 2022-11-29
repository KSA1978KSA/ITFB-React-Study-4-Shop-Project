import React from "react";

import "./css/ButtonWithIcon.css";

import icon_heart from "../../../assets/pictures/icon_heart.png";
import icon_package from "../../../assets/pictures/icon_package.png";
import icon_basket from "../../../assets/pictures/icon_basket.png";

function ButtonWithIcon(props: any) {
  let jsxElement: JSX.Element;

  switch (props.iconName) {
    case "heart":
      jsxElement = (
        <div className="button-with-icon">
          <img
            className="button-with-icon__img"
            src={icon_heart}
            alt=""
            aria-hidden="true"
            data-noaft=""
          />
          <div className="button-with-icon__text">{props.buttonText}</div>
        </div>
      );
      break;

    case "package":
      jsxElement = (
        <div className="button-with-icon">
          <img
            className="button-with-icon__img"
            src={icon_package}
            alt=""
            aria-hidden="true"
            data-noaft=""
          />
          <div className="button-with-icon__text">{props.buttonText}</div>
        </div>
      );
      break;

    case "basket":
      jsxElement = (
        <div className="button-with-icon">
          <img
            className="button-with-icon__img"
            src={icon_basket}
            alt=""
            aria-hidden="true"
            data-noaft=""
          />
          <div className="button-with-icon__text">{props.buttonText}</div>
        </div>
      );
      break;

    default:
      jsxElement = (
        <div className="button-with-icon">
          <div className="button-with-icon__img" />
          <div className="button-with-icon__text">{props.CatigoryName}</div>
        </div>
      );
      break;
  }

  return jsxElement;
}
export { ButtonWithIcon };
