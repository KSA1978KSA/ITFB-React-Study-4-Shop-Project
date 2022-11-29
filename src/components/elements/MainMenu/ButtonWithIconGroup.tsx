import React from "react";

import "./css/ButtonWithIconGroup.css";
import { ButtonWithIcon } from "./ButtonWithIcon";

function ButtonWithIconGroup(props: any) {
  return (
    <div className="button-with-icon-group">
      <ButtonWithIcon iconName="heart" buttonText={"Избранное"} />
      <ButtonWithIcon iconName="package" buttonText={"Заказы"} />
      <ButtonWithIcon iconName="basket" buttonText={"Корзина"} />
    </div>
  );
}
export { ButtonWithIconGroup };
