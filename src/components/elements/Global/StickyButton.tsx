import React from "react";

import "./css/StickyButton.css";

function StickyButton(props: any) {
  let jsxElement: JSX.Element;

  /*
    if (!!props.Button_State===true) {
        jsxElement = <div className='Global__StickyButton'>
                        <div className='Global__StickyButtonText' style={{fontSize:16}}>
                            Ошибка		
                        </div> 
                    </div>;
        return (jsxElement)
    }
    */
  switch (props.Button_State) {
    case 1:
      jsxElement = (
        <div
          className="sticky-button"
          style={{
            background: props.buttonColor_Pressed,
            borderColor: props.textColor_Pressed,
          }}
        >
          <div
            className="sticky-button__text"
            style={{ color: props.textColor_Pressed, fontSize: props.textSize }}
          >
            {props.buttonText}
          </div>
        </div>
      );
      break;

    default:
      jsxElement = (
        <div
          className="sticky-button"
          style={{
            background: props.buttonColor,
            borderColor: props.textColor,
          }}
        >
          <div
            className="sticky-button__text"
            style={{ color: props.textColor, fontSize: props.textSize }}
          >
            {props.buttonText}
          </div>
        </div>
      );
  }

  return jsxElement;
}
export { StickyButton };
