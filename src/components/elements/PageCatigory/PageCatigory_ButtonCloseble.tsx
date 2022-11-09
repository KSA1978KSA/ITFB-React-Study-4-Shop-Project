import React from 'react'; 

import "./css/PageCatigory_ButtonCloseble.css";
import icon_x from "../../../pictures/icon_x.png";

function PageCatigory_ButtonCloseble (props: any) {

    let jsxElement: JSX.Element;

    switch (props.buttonColor) {
        case "Green":
            jsxElement = 
                <div className='PageCatigory__ButtonClosebleGreen'>
                    <div className='PageCatigory__ButtonClosebleGreenCaption'>
                        {props.buttonText}
                    </div>                        
                    <img className='PageCatigory__ButtonClosebleGreenIcon' src={icon_x} alt="" aria-hidden="true" data-noaft="" />            					
                </div>;
            break;        
            
        default:
            jsxElement = 
            <div className='PageCatigory__ButtonClosebleGrayscale'>
                <div className='PageCatigory__ButtonClosebleGrayscaleCaption'>
                    {props.buttonText}
                </div>                        
                <img className='PageCatigory__ButtonClosebleGrayscaleIcon' src={icon_x} alt="" aria-hidden="true" data-noaft="" />            					
            </div>;
        break;        
    }   


	return (		
		jsxElement	
    )
}
export {PageCatigory_ButtonCloseble};      