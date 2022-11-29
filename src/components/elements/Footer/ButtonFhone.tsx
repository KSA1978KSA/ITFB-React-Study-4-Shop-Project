import React from "react";

import "./css/ButtonFhone.css";

import icon_phone from "../../../assets/pictures/icon_phone.png";

function ButtonFhone(props: any) {
  return (
    <div className="button-phone">
      <img
        className="button-phone__img"
        src={icon_phone}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
      <div className="button-phone__text">8 800 777 33 33</div>
    </div>
  );
}
export { ButtonFhone };
