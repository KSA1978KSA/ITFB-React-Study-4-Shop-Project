import React from "react";

import "./css/PageCatigory_FilterInStock.css";
import { Global_Switcher } from "../Global/Global_Switcher";
import { Global_Tab } from "../Global/Global_Tab";

function PageCatigory_FilterInStock(props: any) {
  return (
    <div className="PageCatigory__FilterInStock">
      <Global_Switcher />
      <Global_Tab tabVolume={10} />
      <div className="PageCatigory__FilterInStockText">В наличии</div>
    </div>
  );
}
export { PageCatigory_FilterInStock };
