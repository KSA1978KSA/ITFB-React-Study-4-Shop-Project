import React from 'react';

import "./css/MainMenu.css";
import merch1 from "../../pictures/merch1.png";
import search from "../../pictures/search.png";

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
					<img className='MainMenu__InputSearch' src={search} alt="" aria-hidden="true" data-noaft="" />  
				</div>
			</div>      
		</div>
	)
}
export {MainMenu};      