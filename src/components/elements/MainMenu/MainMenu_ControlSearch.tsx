import React from 'react'; 

import "./css/MainMenu_ControlSearch.css";
import icon_search from "../../../pictures/icon_search.png";

function ControlSearch (props: any) {

	return (		
		<div className='MainMenu__ControlSearch'>
            <input 	
                className='MainMenu__ControlSearchInput'	
                placeholder='Найти товар'																		
            ></input>
            <img className='MainMenu__ControlSearchImg' src={icon_search} alt="" aria-hidden="true" data-noaft="" />  
        </div>	
	)
}
export {ControlSearch};      