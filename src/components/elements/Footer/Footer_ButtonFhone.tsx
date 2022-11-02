import React from 'react'; 

import "./css/Footer_ButtonFhone.css";

import icon_phone from "../../../pictures/icon_phone.png";


function ButtonFhone (props: any) {    

	return (		
		<div className='Footer__ButtonPhone'>
            <img className='Footer__ButtonPhoneImg' src={icon_phone} alt="" aria-hidden="true" data-noaft="" />                    
            <div className='Footer__ButtonPhoneText'>8 800 777 33 33</div>                   
        </div>		
	)
}
export {ButtonFhone};      