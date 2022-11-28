import React from "react";
import "./css/SelectValuesByButtonsActivators.css";
import { Global_ButtonActivator } from "../Global/Global_ButtonActivator";

function SelectValuesByButtonsActivators() {
  return (
    <div className="select-values-by-buttons-activators">
      <Global_ButtonActivator buttonText={"Товары нашего производства"} />
      <Global_ButtonActivator buttonText={"Полезное питание"} />
      <Global_ButtonActivator buttonText={"Без ГМО"} />
    </div>
  );
}
export { SelectValuesByButtonsActivators };
