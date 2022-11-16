import React from "react";

import "./css/Global_SimpleStickyButton.css";

function Global_SimpleStickyButton(props: any) {
  let jsxElement: JSX.Element;

  /*
    if (!!props.Button_State===true) {
        jsxElement = <div className='Global__SimpleStickyButton'>
                        <div className='Global__SimpleStickyButtonText' style={{fontSize:16}}>
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
          className="Global__SimpleStickyButton"
          style={{
            background: props.buttonColor_Pressed,
            borderColor: props.textColor_Pressed,
          }}
        >
          <div
            className="Global__SimpleStickyButtonText"
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
          className="Global__SimpleStickyButton"
          style={{
            background: props.buttonColor,
            borderColor: props.textColor,
          }}
        >
          <div
            className="Global__SimpleStickyButtonText"
            style={{ color: props.textColor, fontSize: props.textSize }}
          >
            {props.buttonText}
          </div>
        </div>
      );
  }

  return jsxElement;
}
export { Global_SimpleStickyButton };
