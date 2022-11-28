import React from "react";

import "./css/CatigoryCard.css";

import { useNavigate } from "react-router-dom";

//--- Компонент с тенью
function CardShadow(props: any) {
  let jsxElement: JSX.Element;

  if (!props.shadowType) {
    jsxElement = <div className="сatigory-сard__shadow-1" />;
  } else {
    jsxElement = <div className="сatigory-сard__shadow-2" />;
  }

  return jsxElement;
}

//--- Компонент с текстом
function CardText(props: any) {}

function CatigoryCard(props: any) {
  const navigate = useNavigate();

  return (
    <div
      className="сatigory-сard"
      onClick={() => {
        navigate(`/PageCatigory`);
      }}
    >
      <img
        className="сatigory-сard__img"
        src={props.image}
        alt=""
        aria-hidden="true"
        data-noaft=""
      />
      <CardShadow shadowType={props.shadowType} />
      <div className="сatigory-сard__text">{props.CatigoryName}</div>
    </div>
  );
}
export { CatigoryCard };
