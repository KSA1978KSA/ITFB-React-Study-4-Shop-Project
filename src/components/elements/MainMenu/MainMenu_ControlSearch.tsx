import React from "react";

import "./css/MainMenu_ControlSearch.css";
import icon_search from "../../../assets/pictures/icon_search.png";

function MainMenu_ControlSearch(props: any) {
  return (
    <div className="MainMenu__ControlSearch">
      <input
        className="MainMenu__ControlSearchInput"
        placeholder="Найти товар"
      ></input>
      <img
        className="MainMenu__ControlSearchImg"
        src={icon_search}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
    </div>
  );
}
export { MainMenu_ControlSearch };
