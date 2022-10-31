import React from 'react';

import "./css/MainMenu.css";
import merch1 from "../../pictures/merch1.png";
import icon_search from "../../pictures/icon_search.png";
import {ButtonWithIcon} from "../elements/ButtonWithIcon";

function MainMenu () {


	return (
		<div className='MainMenu'>
			<div className='MainMenuContainer'>
				<div className='MainMenu__Tab116'/>
				<img className='MainMenu__Merch' src={merch1} alt="" aria-hidden="true" data-noaft="" />  
				<div className='MainMenu__Tab40'/>  
				<div className='MainMenu__ButtonList'>
					<div className='MainMenu__ButtonListIcon'>
						<div className='MainMenu__ButtonListIconLine' />
						<div className='MainMenu__ButtonListIconTab' />
						<div className='MainMenu__ButtonListIconLine' />
						<div className='MainMenu__ButtonListIconTab' />
						<div className='MainMenu__ButtonListIconLine' />
					</div>
					<div className='MainMenu__ButtonListCaption'>
						Каталог
					</div>					
				</div>
				<div className='MainMenu__InputWrapper'>
					<input 	
						className='MainMenu__Input'	
						placeholder='Найти товар'																		
					></input>
					<img className='MainMenu__InputSearch' src={icon_search} alt="" aria-hidden="true" data-noaft="" />  
				</div>

				<div className='MainMenu__ButtonsWithIconArray'>
					<ButtonWithIcon iconName="heart" buttonText={"Избранное"} />
					<ButtonWithIcon iconName="package" buttonText={"Заказы"} />
					<ButtonWithIcon iconName="basket" buttonText={"Корзина"} />
				</div>
			</div>      
		</div>
	)
}
export {MainMenu};      