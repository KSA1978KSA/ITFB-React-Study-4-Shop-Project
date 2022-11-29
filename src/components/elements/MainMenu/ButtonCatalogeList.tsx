import React from "react";

import "./css/ButtonCatalogeList.css";

function ButtonCatalogeList(props: any) {
  return (
    <div className="button-cataloge-list">
      <div className="button-cataloge-list__icon">
        <div className="button-cataloge-list__icon-line" />
        <div className="button-cataloge-list__icon-tab" />
        <div className="button-cataloge-list__icon-line" />
        <div className="button-cataloge-list__icon-tab" />
        <div className="button-cataloge-list__icon-line" />
      </div>
      <div className="button-cataloge-list__caption">Каталог</div>
    </div>
  );
}
export { ButtonCatalogeList };
