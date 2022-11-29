import React from "react";
import icon_star_1 from "../../../assets/pictures/icon_star_1.png";

function RatingStars(props: any) {
  let jsxElement: JSX.Element;

  jsxElement = (
    <div className="rating-stars">
      <img
        className="rating-stars__star-1"
        src={icon_star_1}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
      <img
        className="rating-stars__star-1"
        src={icon_star_1}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
      <img
        className="rating-stars__star-1"
        src={icon_star_1}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
      <img
        className="rating-stars__star-1"
        src={icon_star_1}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
      <img
        className="rating-stars__star-1"
        src={icon_star_1}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
    </div>
  );

  return jsxElement;
}
export { RatingStars };
