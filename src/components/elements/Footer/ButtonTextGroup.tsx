import React from "react";

import "./css/ButtonTextGroup.css";
import { ButtonText } from "./ButtonText";

function ButtonTextGroup(props: any) {
  return (
    <div className="button-text-group">
      <ButtonText buttonText={"О компании"} />
      <ButtonText buttonText={"Контакты"} />
      <ButtonText buttonText={"Вакансии"} />
      <ButtonText buttonText={"Статьи"} />
      <ButtonText buttonText={"Политика обработки персональных данных"} />
    </div>
  );
}
export { ButtonTextGroup };
