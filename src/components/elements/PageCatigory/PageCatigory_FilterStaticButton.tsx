import React from 'react'; 

import "./css/PageCatigory_FilterStaticButton.css";

function PageCatigory_FilterStaticButton (props: any) {

	return (		
        <div className='PageCatigory__FilterStaticButton'>
			<div className='PageCatigory__FilterStaticButtonText'>
				{props.buttonText}			
			</div> 
		</div>                   
	)
}
export {PageCatigory_FilterStaticButton};      