import React from "react";
import "./css/InputDiapazon.css";
import { SimpleButton } from "../Button/SimpleButton";
import { InputNumber } from "./InputNumber";
import { Polzunok } from "../Other/Polzunok";

function InputDiapazon() {
  return (
    <div className="input-diapazon">
      <div className="input-diapazon__wrapper-1">
        <div className="input-diapazon__price-text">
          <div className="input-diapazon__title-price-text">Цена</div>
        </div>
        <div className="input-diapazon__button-clear">
          <SimpleButton buttonText={"Очистить"} />
        </div>
      </div>
      <div className="input-diapazon__wrapper-2">
        <div className="input-diapazon__price-input">
          <InputNumber />
        </div>
        <div className="input-diapazon__price-tire" />
        <div className="input-diapazon__price-input">
          <InputNumber />
        </div>
      </div>
      <div className="input-diapazon__wrapper-3">
        <Polzunok />
      </div>
    </div>
  );
}
export { InputDiapazon };
