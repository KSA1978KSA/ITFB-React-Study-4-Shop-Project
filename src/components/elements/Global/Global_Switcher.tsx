import React from "react";

import "./css/Global_Switcher.css";
import { Global_Tab } from "../Global/Global_Tab";

function Global_Switcher(props: any) {
  return (
    <div className="Global__Switcher">
      <div className="Global__SwitcherRelative">
        <div className="Global__SwitcherWrapper">
          <div className="Global__SwitcherWrapperFlex">
            <div className="Global__SwitcherBackground" />
          </div>
        </div>
        <div className="Global__SwitcherWrapper">
          <div className="Global__SwitcherWrapperFlex">
            <Global_Tab tabVolume={24} />
            <div className="Global__SwitcherCircle" />
          </div>
        </div>
      </div>
    </div>
  );
}
export { Global_Switcher };
