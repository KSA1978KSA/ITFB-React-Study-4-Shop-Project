import React from 'react';

import "./css/MainMenu.css";
import merch1 from "../../pictures/merch1.png";
import profileIcon1 from "../../pictures/profileIcon1.png";
import {ButtonProfile} from "../elements/MainMenu/ButtonProfile";
import {ButtonProfileDrillDown} from "../elements/MainMenu/ButtonProfileDrillDown";
import {ButtonCatalogeList} from "../elements/MainMenu/ButtonCatalogeList";
import {ControlSearch} from "../elements/MainMenu/ControlSearch";
import {ButtonsWithIconArray} from "../elements/MainMenu/ButtonsWithIconArray";
import {ElementTab} from "../elements/MainMenu/ElementTab";

function MainMenu () {


	return (
		<div className='MainMenu'>
			<div className='MainMenuContainer'>				
				<ElementTab tabVolume={116} />				
				<img className='MainMenu__Merch' src={merch1} alt="" aria-hidden="true" data-noaft="" />  

				<ElementTab tabVolume={40} />
				<ButtonCatalogeList />

				<ElementTab tabVolume={16} />
				<ControlSearch />

				<ElementTab tabVolume={40} /> 
				<ButtonsWithIconArray />

				<ElementTab tabVolume={40} />
				<ButtonProfile buttonIcon={profileIcon1} buttonText={"Макакин"} />

				<ElementTab tabVolume={24} /> 
				<ButtonProfileDrillDown />
			</div>      
		</div>
	)
}
export {MainMenu};      