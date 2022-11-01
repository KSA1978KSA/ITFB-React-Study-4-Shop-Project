import React from 'react';

import "./css/Footer.css";
import merch2 from "../../pictures/merch2.png";

function Footer () {


	return (
		<div className='Footer'>
			<div className='FooterContainer'>
				<div className='Footer__Tab116'/>
				<img className='Footer__Merch' src={merch2} alt="" aria-hidden="true" data-noaft="" />    
			</div>              
		</div>
	)
}
export {Footer};      