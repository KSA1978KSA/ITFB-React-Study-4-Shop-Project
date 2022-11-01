import React from 'react'; 

import "./css/ButtonProfileDrillDown.css";
import icon_DrillDown from "../../../pictures/icon_DrillDown.png";

function ButtonProfileDrillDown (props: any) {

	return (		
		<div className='MainMenu__ButtonProfileDrillDown'>
            <img className='MainMenu__ButtonProfileDrillDownImg' src={icon_DrillDown} alt="" aria-hidden="true" data-noaft="" />                                
        </div>	
	)
}
export {ButtonProfileDrillDown};      