import React from "react";

function HTab(props: any) {
  let jsxElement: JSX.Element;

  jsxElement = (
    <div
      style={{ display: "flex", width: props.tabVolume }}
      className={"h-tab" + props.tabVolume}
    />
  );

  return jsxElement;
}
export { HTab };
