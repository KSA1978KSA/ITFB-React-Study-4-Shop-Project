import React from 'react';

import "./css/PageCatigory.css";
import {PageCatigory_Filter1} from "../elements/PageCatigory/PageCatigory_Filter1";


import {	
	useNavigate
  } from "react-router-dom";


function PageCatigory () {

	const navigate = useNavigate();

	return (
		<div>			
			<div className='PageCatigoryPath'>	
			<div>Главная</div>
			<div>{"/"}</div>
			<div>Каталог</div>
			<div>{"/"}</div>
			<div>Молоко, сыр, яйцо</div>
		</div>	
		<div className='PageCatigoryHeader'>	
			Молоко, сыр, яйцо
		</div>	
		<PageCatigory_Filter1 />

			<button
              onClick={()=>{
                navigate(`/PageCatigories`);
              }}
            >Home</button>            
		</div>
	)
}
export {PageCatigory};      