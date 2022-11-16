import React from "react";
import icon_star_1 from "../../../assets/pictures/icon_star_1.png";

function Global_RatingStars(props: any) {
  let jsxElement: JSX.Element;

  jsxElement = (
    <div className="Global__RatingStars">
      <img
        className="Global__RatingStars_Star_1"
        src={icon_star_1}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
      <img
        className="Global__RatingStars_Star_1"
        src={icon_star_1}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
      <img
        className="Global__RatingStars_Star_1"
        src={icon_star_1}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
      <img
        className="Global__RatingStars_Star_1"
        src={icon_star_1}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
      <img
        className="Global__RatingStars_Star_1"
        src={icon_star_1}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
    </div>
  );

  return jsxElement;
}
export { Global_RatingStars };
