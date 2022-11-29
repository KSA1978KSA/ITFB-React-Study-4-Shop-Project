import React from "react";

import "./css/ButtonProfileDrillDown.css";
import icon_DrillDown from "../../../assets/pictures/icon_DrillDown.png";

function ButtonProfileDrillDown(props: any) {
  return (
    <div className="button-profile-drilldown">
      <img
        className="button-profile-drilldown__img"
        src={icon_DrillDown}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
    </div>
  );
}
export { ButtonProfileDrillDown };
