import React from "react";

import "./css/ButtonSwitcher.css";
import { HTab } from "./HTab";

function ButtonSwitcher(props: any) {
  return (
    <div className="button-switcher">
      <div className="button-switcher__relative">
        <div className="button-switcher__wrapper">
          <div className="button-switcher__wrapper-flex">
            <div className="button-switcher__background" />
          </div>
        </div>
        <div className="button-switcher__wrapper">
          <div className="button-switcher__wrapper-flex">
            <HTab tabVolume={24} />
            <div className="button-switcher__circle" />
          </div>
        </div>
      </div>
    </div>
  );
}
export { ButtonSwitcher };
