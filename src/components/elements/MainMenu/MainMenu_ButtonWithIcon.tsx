import React from "react";

import "./css/MainMenu_ButtonWithIcon.css";

import icon_heart from "../../../assets/pictures/icon_heart.png";
import icon_package from "../../../assets/pictures/icon_package.png";
import icon_basket from "../../../assets/pictures/icon_basket.png";

function ButtonWithIcon(props: any) {
  let jsxElement: JSX.Element;

  switch (props.iconName) {
    case "heart":
      jsxElement = (
        <div className="MainMenu__ButtonWithIcon">
          <img
            className="ButtonWithIconImg"
            src={icon_heart}
            alt=""
            aria-hidden="true"
            data-noaft=""
          />
          <div className="MainMenu__ButtonWithIconText">{props.buttonText}</div>
        </div>
      );
      break;

    case "package":
      jsxElement = (
        <div className="MainMenu__ButtonWithIcon">
          <img
            className="ButtonWithIconImg"
            src={icon_package}
            alt=""
            aria-hidden="true"
            data-noaft=""
          />
          <div className="MainMenu__ButtonWithIconText">{props.buttonText}</div>
        </div>
      );
      break;

    case "basket":
      jsxElement = (
        <div className="MainMenu__ButtonWithIcon">
          <img
            className="ButtonWithIconImg"
            src={icon_basket}
            alt=""
            aria-hidden="true"
            data-noaft=""
          />
          <div className="MainMenu__ButtonWithIconText">{props.buttonText}</div>
        </div>
      );
      break;

    default:
      jsxElement = (
        <div className="MainMenu__ButtonWithIcon">
          <div className="ButtonWithIconImg" />
          <div className="MainMenu__ButtonWithIconText">
            {props.CatigoryName}
          </div>
        </div>
      );
      break;
  }

  return jsxElement;
}
export { ButtonWithIcon };
