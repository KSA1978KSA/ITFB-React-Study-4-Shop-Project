import React from "react";

import "./css/Global_Polzunok.css";
import { Global_Tab } from "../Global/Global_Tab";

function Global_Polzunok(props: any) {
  return (
    <div className="Global__Polzunok">
      <div className="Global__PolzunokWrapper">
        <div className="Global__PolzunokWrapperFlex">
          <div className="Global__PolzunokBackLine" />
        </div>
      </div>
      <div className="Global__PolzunokWrapper">
        <div className="Global__PolzunokWrapperFlex">
          <Global_Tab tabVolume={33} />
          <div className="Global__PolzunokCircle" />
          <div className="Global__PolzunokLine" />
          <div className="Global__PolzunokCircle" />
        </div>
      </div>
    </div>
  );
}
export { Global_Polzunok };
