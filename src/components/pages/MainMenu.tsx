import React from 'react';

import "./css/MainMenu.css";
import merch1 from "../../pictures/merch1.png";
import profileIcon1 from "../../pictures/profileIcon1.png";
import {ButtonProfile} from "../elements/MainMenu/MainMenu_ButtonProfile";
import {ButtonProfileDrillDown} from "../elements/MainMenu/MainMenu_ButtonProfileDrillDown";
import {ButtonCatalogeList} from "../elements/MainMenu/MainMenu_ButtonCatalogeList";
import {ControlSearch} from "../elements/MainMenu/MainMenu_ControlSearch";
import {ButtonsWithIconArray} from "../elements/MainMenu/MainMenu_ButtonithIconArray";
import {MainMenuElementTab} from "../elements/MainMenu/MainMenu_ElementTab";

function MainMenu () {


	return (
		<div className='MainMenu'>
			<div className='MainMenuContainer'>				
				<MainMenuElementTab tabVolume={116} />				
				<img className='MainMenu__Merch' src={merch1} alt="" aria-hidden="true" data-noaft="" />  

				<MainMenuElementTab tabVolume={40} />
				<ButtonCatalogeList />

				<MainMenuElementTab tabVolume={16} />
				<ControlSearch />

				<MainMenuElementTab tabVolume={40} /> 
				<ButtonsWithIconArray />

				<MainMenuElementTab tabVolume={40} />
				<ButtonProfile buttonIcon={profileIcon1} buttonText={"Макакин"} />

				<MainMenuElementTab tabVolume={24} /> 
				<ButtonProfileDrillDown />
			</div>      
		</div>
	)
}
export {MainMenu};      