import React from 'react';

import "./css/Footer.css";
import merch2 from "../../pictures/merch2.png";
import {ButtonTextArray} from "../elements/Footer/Footer_ButtonTextArray";
import {ButtonSocialNetworkArray} from "../elements/Footer/Footer_ButtonSocialNetworkArray";
import {Global_Tab} from "../elements/Global/Global_Tab";
import {ButtonFhone} from "../elements/Footer/Footer_ButtonFhone";

function Footer () {


	return (
		<div className='Footer'>
			<div className='FooterContainer'>
				<Global_Tab tabVolume={116} />	
				<img className='Footer__Merch' src={merch2} alt="" aria-hidden="true" data-noaft="" />    
				<Global_Tab tabVolume={40} />	
				<ButtonTextArray />
				<Global_Tab tabVolume={135} />	
				<ButtonSocialNetworkArray />
				<Global_Tab tabVolume={47} />	
				<ButtonFhone />
			</div>              
		</div>
	)
}
export {Footer};      