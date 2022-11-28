import React from "react";

import "./css/SwitcherWithText.css";
import { Global_Switcher } from "../Global/Global_Switcher";
import { Global_Tab } from "../Global/Global_Tab";

function SwitcherWithText(props: any) {
  return (
    <div className="switcher-with-text">
      <Global_Switcher />
      <Global_Tab tabVolume={10} />
      <div className="switcher-with-text__text">{props.text}</div>
    </div>
  );
}
export { SwitcherWithText };
