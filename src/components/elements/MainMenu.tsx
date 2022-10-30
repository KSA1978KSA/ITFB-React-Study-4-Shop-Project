import React from 'react';

import "./css/MainMenu.css";
import merch1 from "../../pictures/merch1.png";

function MainMenu () {


	return (
		<div className='MainMenu'>
			<div className='MainMenuContainer'>
				<div className='MainMenu__Tab116'/>
				<img className='MainMenu__Merch' src={merch1} alt="" aria-hidden="true" data-noaft="" />    
			</div>      
		</div>
	)
}
export {MainMenu};      