import React from 'react';

import "./css/PageCatigory.css";
import {PageCatigory_FilterStatic} from "../elements/PageCatigory/PageCatigory_FilterStatic";


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

		<div className='PageCatigoryBody'>
			<PageCatigory_FilterStatic />
		</div>
		

			<button
              onClick={()=>{
                navigate(`/PageCatigories`);
              }}
            >Home</button>            
		</div>
	)
}
export {PageCatigory};      