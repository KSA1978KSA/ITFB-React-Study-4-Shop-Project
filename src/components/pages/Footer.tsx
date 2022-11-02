import React from 'react';

import "./css/Footer.css";
import merch2 from "../../pictures/merch2.png";
import {ButtonTextArray} from "../elements/Footer/Footer_ButtonTextArray";
import {ButtonSocialNetworkArray} from "../elements/Footer/Footer_ButtonSocialNetworkArray";
import {FooterElementTab} from "../elements/Footer/Footer_ElementTab";
import {ButtonFhone} from "../elements/Footer/Footer_ButtonFhone";

function Footer () {


	return (
		<div className='Footer'>
			<div className='FooterContainer'>
				<FooterElementTab tabVolume={116} />	
				<img className='Footer__Merch' src={merch2} alt="" aria-hidden="true" data-noaft="" />    
				<FooterElementTab tabVolume={40} />	
				<ButtonTextArray />
				<FooterElementTab tabVolume={135} />	
				<ButtonSocialNetworkArray />
				<FooterElementTab tabVolume={47} />	
				<ButtonFhone />
			</div>              
		</div>
	)
}
export {Footer};      