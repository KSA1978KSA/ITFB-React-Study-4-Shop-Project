import React from "react";
import { JsxAttribute } from "typescript";

import "./css/PageNavigator.css";

function PageNavigatorButton(props: any) {
  return <div className="page-navigator__button">{props.buttonText}</div>;
}

function PageNavigator(props: any) {
  return (
    <div className="page-navigator">
      <div className="page-navigator__left-buttons">
        <PageNavigatorButton buttonText={"<<"} />
        <PageNavigatorButton buttonText={"<"} />
      </div>

      <div className="page-navigator__page-buttons">
        <PageNavigatorButton buttonText={"1"} />
        <PageNavigatorButton buttonText={"2"} />
        <PageNavigatorButton buttonText={"3"} />
        <PageNavigatorButton buttonText={"4"} />
        <PageNavigatorButton buttonText={"5"} />
        <PageNavigatorButton buttonText={"6"} />
        <PageNavigatorButton buttonText={"7"} />
        <PageNavigatorButton buttonText={"8"} />
      </div>

      <div className="page-navigator__right-buttons">
        <PageNavigatorButton buttonText={">"} />
        <PageNavigatorButton buttonText={">>"} />
      </div>
    </div>
  );
}
export { PageNavigator };
