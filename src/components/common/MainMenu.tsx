import React from "react";

import "./css/MainMenu.css";
import merch1 from "../../assets/pictures/merch1.png";
import profileIcon1 from "../../assets/pictures/profileIcon1.png";
import { ButtonProfile } from "../elements/MainMenu/ButtonProfile";
import { ButtonProfileDrillDown } from "../elements/MainMenu/ButtonProfileDrillDown";
import { ButtonCatalogeList } from "../elements/MainMenu/ButtonCatalogeList";
import { ControlSearch } from "../elements/MainMenu/ControlSearch";
import { ButtonWithIconGroup } from "../elements/MainMenu/ButtonWithIconGroup";
import { HTab } from "../elements/Global/HTab";

function MainMenu() {
  return (
    <div className="main-menu">
      <div className="main-menu__wrapper">
        <HTab tabVolume={116} />
        <img
          className="main-menu__merch"
          src={merch1}
          alt=""
          aria-hidden="true"
          data-noaft=""
        />

        <HTab tabVolume={40} />
        <ButtonCatalogeList />

        <HTab tabVolume={16} />
        <ControlSearch />

        <HTab tabVolume={40} />
        <ButtonWithIconGroup />

        <HTab tabVolume={40} />
        <ButtonProfile buttonIcon={profileIcon1} buttonText={"Макакин"} />

        <HTab tabVolume={24} />
        <ButtonProfileDrillDown />
      </div>
    </div>
  );
}
export { MainMenu };
