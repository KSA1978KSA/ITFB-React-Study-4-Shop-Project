import React from "react";

import "./css/MainMenu.css";
import merch1 from "../../assets/pictures/merch1.png";
import profileIcon1 from "../../assets/pictures/profileIcon1.png";
import { ButtonProfile } from "../elements/MainMenu/MainMenu_ButtonProfile";
import { ButtonProfileDrillDown } from "../elements/MainMenu/MainMenu_ButtonProfileDrillDown";
import { ButtonCatalogeList } from "../elements/MainMenu/MainMenu_ButtonCatalogeList";
import { MainMenu_ControlSearch } from "../elements/MainMenu/MainMenu_ControlSearch";
import { ButtonsWithIconArray } from "../elements/MainMenu/MainMenu_ButtonithIconArray";
import { Global_Tab } from "../elements/Global/Global_Tab";

function MainMenu() {
  return (
    <div className="MainMenu">
      <div className="MainMenuContainer">
        <Global_Tab tabVolume={116} />
        <img
          className="MainMenu__Merch"
          src={merch1}
          alt=""
          aria-hidden="true"
          data-noaft=""
        />

        <Global_Tab tabVolume={40} />
        <ButtonCatalogeList />

        <Global_Tab tabVolume={16} />
        <MainMenu_ControlSearch />

        <Global_Tab tabVolume={40} />
        <ButtonsWithIconArray />

        <Global_Tab tabVolume={40} />
        <ButtonProfile buttonIcon={profileIcon1} buttonText={"Макакин"} />

        <Global_Tab tabVolume={24} />
        <ButtonProfileDrillDown />
      </div>
    </div>
  );
}
export { MainMenu };
