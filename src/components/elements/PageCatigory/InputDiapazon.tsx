import React from "react";
import "./css/InputDiapazon.css";
import { Global_SimpleButton } from "../Global/Global_SimpleButton";
import { Global_Input } from "../Global/Global_Input";
import { Global_Polzunok } from "../Global/Global_Polzunok";

function InputDiapazon() {
  return (
    <div className="input-diapazon">
      <div className="input-diapazon__wrapper_1">
        <div className="input-diapazon__price-text">
          <div className="input-diapazon__title-price-text">Цена</div>
        </div>
        <div className="input-diapazon__button-clear">
          <Global_SimpleButton buttonText={"Очистить"} />
        </div>
      </div>
      <div className="input-diapazon__wrapper_2">
        <div className="input-diapazon__price-input">
          <Global_Input />
        </div>
        <div className="input-diapazon__price-tire" />
        <div className="input-diapazon__price-input">
          <Global_Input />
        </div>
      </div>
      <div className="input-diapazon__wrapper_3">
        <Global_Polzunok />
      </div>
    </div>
  );
}
export { InputDiapazon };
