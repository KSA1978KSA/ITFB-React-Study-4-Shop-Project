import React from "react";

import "./css/SwitcherWithText.css";
import { ButtonSwitcher } from "../Button/ButtonSwitcher";
import { HTab } from "../Other/HTab";

function SwitcherWithText(props: any) {
  return (
    <div className="switcher-with-text">
      <ButtonSwitcher />
      <HTab tabVolume={10} />
      <div className="switcher-with-text__text">{props.text}</div>
    </div>
  );
}
export { SwitcherWithText };
