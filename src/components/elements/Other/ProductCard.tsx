import React from "react";
import "./css/ProductCard.css";
import icon_heart from "../../../assets/pictures/icon_heart.png";
import { RatingStars } from "../Other/RatingStars";
import { ButtonSticky } from "../Button/ButtonSticky";

function ProductCard(props: any) {
  return (
    <div className="product-card">
      <div className="product-card__print">
        <div className="product-card__print-interlayer">
          <img
            className="product-card__print-icon"
            src={props.Print}
            alt=""
            aria-hidden="true"
            data-noaft=""
          />

          <div className="product-card__button-love">
            <img
              className="product-card__button-love-icon"
              src={icon_heart}
              alt=""
              aria-hidden="true"
              data-noaft=""
            />
          </div>
        </div>
      </div>

      <div className="product-card__data">
        <div className="product-card__prices">
          <div className="product-card__price-1">
            <div className="product-card__price-1-digit">
              {!props.Price1 === false ? props.Price1 + " ₽" : ""}
            </div>
            <div className="product-card__price-1-caption">
              {props.Caption_Price1}
            </div>
          </div>

          <div className="product-card__price-2">
            <div className="product-card__price-2-digit">
              {!props.Price2 === false ? props.Price2 + " ₽" : ""}
            </div>
            <div className="product-card__price-2-caption">
              {props.Caption_Price2}
            </div>
          </div>
        </div>

        <div className="product-card__name">{props.Name}</div>

        <div className="product-card__product-rating">
          <RatingStars />
        </div>

        <ButtonSticky
          buttonText={"В корзину"}
          textSize={16}
          textColor={"#70C05B"}
          buttonColor={"#FFFFFF"}
          textColor_Pressed={"#FFFFFF"}
          buttonColor_Pressed={"#FF6633"}
          Button_State={props.InBasket}
        />
      </div>
    </div>
  );
}
export { ProductCard };
