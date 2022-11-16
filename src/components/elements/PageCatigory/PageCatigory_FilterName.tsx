import React from "react";

import "./css/PageCatigory_FilterName.css";

function PageCatigory_FilterName(props: any) {
  return (
    <div className="PageCatigory__FilterName">
      <input
        className="PageCatigory__FilterNameInput"
        placeholder="Фильтр"
      ></input>
    </div>
  );
}
export { PageCatigory_FilterName };
