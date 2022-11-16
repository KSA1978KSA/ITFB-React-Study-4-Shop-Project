import React from "react";

import "./css/PageCatigories_CatigoryCard.css";

import { useNavigate } from "react-router-dom";

//--- Компонент с тенью
function CardShadow(props: any) {
  let jsxElement: JSX.Element;

  if (!props.shadowType) {
    jsxElement = <div className="CatigoryCardShadow1" />;
  } else {
    jsxElement = <div className="CatigoryCardShadow2" />;
  }

  return jsxElement;
}

//--- Компонент с текстом
function CardText(props: any) {}

function CatigoryCard(props: any) {
  let jsxElement: JSX.Element;

  const navigate = useNavigate();

  switch (props.cardType) {
    case 0:
      jsxElement = (
        <div
          className="PageCatigoriesBody__CatigoryCard584"
          onClick={() => {
            navigate(`/PageCatigory`);
          }}
        >
          <img
            className="CatigoryCardImg"
            src={props.image}
            alt=""
            aria-hidden="true"
            data-noaft=""
          />
          <CardShadow shadowType={props.shadowType} />
          <div className="CatigoryCardText">{props.CatigoryName}</div>
        </div>
      );
      break;

    case 1:
      jsxElement = (
        <div
          className="PageCatigoriesBody__CatigoryCard272"
          onClick={() => {
            navigate(`/PageCatigory`);
          }}
        >
          <img
            className="CatigoryCardImg"
            src={props.image}
            alt=""
            aria-hidden="true"
            data-noaft=""
          />
          <CardShadow shadowType={props.shadowType} />
          <div className="CatigoryCardText">{props.CatigoryName}</div>
        </div>
      );
      break;

    default:
      jsxElement = (
        <div
          className="PageCatigoriesBody__CatigoryCard584"
          onClick={() => {
            navigate(`/PageCatigory`);
          }}
        >
          <img
            className="CatigoryCardImg"
            src={props.image}
            alt=""
            aria-hidden="true"
            data-noaft=""
          />
          <CardShadow shadowType={props.shadowType} />
          <div className="CatigoryCardText">{props.CatigoryName}</div>
        </div>
      );
  }

  return jsxElement;
}
export { CatigoryCard };
