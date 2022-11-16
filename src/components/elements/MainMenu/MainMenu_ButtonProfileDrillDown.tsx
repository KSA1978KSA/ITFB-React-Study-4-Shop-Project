import React from "react";

import "./css/MainMenu_ButtonProfileDrillDown.css";
import icon_DrillDown from "../../../assets/pictures/icon_DrillDown.png";

function ButtonProfileDrillDown(props: any) {
  return (
    <div className="MainMenu__ButtonProfileDrillDown">
      <img
        className="MainMenu__ButtonProfileDrillDownImg"
        src={icon_DrillDown}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
    </div>
  );
}
export { ButtonProfileDrillDown };
