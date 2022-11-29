import React from "react";

import "./css/ControlSearch.css";
import icon_search from "../../../assets/pictures/icon_search.png";

function ControlSearch(props: any) {
  return (
    <div className="control-search">
      <input
        className="control-search__input"
        placeholder="Найти товар"
      ></input>
      <img
        className="control-search__img"
        src={icon_search}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
    </div>
  );
}
export { ControlSearch };
