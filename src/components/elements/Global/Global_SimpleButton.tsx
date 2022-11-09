import React from 'react'; 

import "./css/Global_SimpleButton.css";

function Global_SimpleButton (props: any) {

	return (		
        <div className='Global__SimpleButton'>
			<div className='Global__SimpleButtonText'>
				{props.buttonText}			
			</div> 
		</div>                   
	)
}
export {Global_SimpleButton};      