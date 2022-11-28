import React from "react";

import "./css/AddedValuesAsButtons.css";
import { ButtonCloseble } from "./ButtonCloseble";

function AddedValuesAsButtons(props: any) {
  return (
    <div className="added-values-as-buttons">
      <ButtonCloseble buttonText={"Фильтр 4"} buttonColor={"Green"} />
      <ButtonCloseble buttonText={"Цена от 99 до 2599"} buttonColor={"Green"} />
      <ButtonCloseble buttonText={"Очистить фильтры"} />
    </div>
  );
}
export { AddedValuesAsButtons };
