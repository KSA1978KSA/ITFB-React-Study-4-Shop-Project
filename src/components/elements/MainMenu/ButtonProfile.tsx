import React from "react";

import "./css/ButtonProfile.css";

function ButtonProfile(props: any) {
  return (
    <div className="button-profile">
      <img
        className="button-profile__img"
        src={props.buttonIcon}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
      <div className="button-profile__text">{props.buttonText}</div>
    </div>
  );
}
export { ButtonProfile };
