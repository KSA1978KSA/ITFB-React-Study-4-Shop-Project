import React from "react";

import "./css/InputText.css";

function InputText(props: any) {
  return (
    <div className="input-text">
      <input className="input-text__input" placeholder="Фильтр"></input>
    </div>
  );
}
export { InputText };
