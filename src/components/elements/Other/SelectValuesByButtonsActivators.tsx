import React from "react";
import "./css/SelectValuesByButtonsActivators.css";
import { ButtonActivator } from "../Button/ButtonActivator";

function SelectValuesByButtonsActivators() {
  return (
    <div className="select-values-by-buttons-activators">
      <ButtonActivator buttonText={"Товары нашего производства"} />
      <ButtonActivator buttonText={"Полезное питание"} />
      <ButtonActivator buttonText={"Без ГМО"} />
    </div>
  );
}
export { SelectValuesByButtonsActivators };
