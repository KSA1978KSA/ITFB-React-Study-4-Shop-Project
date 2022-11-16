import React from "react";

import "./css/MainMenu_ButtonProfile.css";

function ButtonProfile(props: any) {
  return (
    <div className="MainMenu__ButtonProfile">
      <img
        className="MainMenu__ButtonProfileImg"
        src={props.buttonIcon}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
      <div className="MainMenu__ButtonProfileText">{props.buttonText}</div>
    </div>
  );
}
export { ButtonProfile };
