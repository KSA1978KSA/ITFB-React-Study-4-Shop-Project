import React from "react";

import "./css/ListBox.css";

function ListBox(props: any) {
  return (
    <div className="list-box">
      <div className="list-box__element">Молоко</div>
      <div className="list-box__element">Сливки</div>
      <div className="list-box__element">Яйцо</div>
    </div>
  );
}
export { ListBox };
