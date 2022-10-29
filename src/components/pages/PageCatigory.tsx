import React from 'react';

import "./css/PageCatigory.css";

import {MainMenu} from "../elements/MainMenu";


import {	
	useNavigate
  } from "react-router-dom";


function PageCatigory () {

	const navigate = useNavigate();

	return (
		<div className='PageCatigory'>			
			<div>PageCatigory</div> 
			<button
              onClick={()=>{
                navigate(`/PageCatigories`);
              }}
            >Home</button>            
		</div>
	)
}
export {PageCatigory};      