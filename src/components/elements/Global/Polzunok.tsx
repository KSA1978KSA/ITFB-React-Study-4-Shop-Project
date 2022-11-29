import React from "react";

import "./css/Polzunok.css";
import { HTab } from "./HTab";

function Polzunok(props: any) {
  return (
    <div className="polzunok">
      <div className="polzunok__wrapper">
        <div className="polzunok__wrapper-flex">
          <div className="polzunok__back-line" />
        </div>
      </div>
      <div className="polzunok__wrapper">
        <div className="polzunok__wrapper-flex">
          <HTab tabVolume={33} />
          <div className="polzunok__circle" />
          <div className="polzunok__line" />
          <div className="polzunok__circle" />
        </div>
      </div>
    </div>
  );
}
export { Polzunok };
