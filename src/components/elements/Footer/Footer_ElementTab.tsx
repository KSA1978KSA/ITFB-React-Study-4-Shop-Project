import React from 'react'; 

import "./css/Footer_ElementTab.css";

function FooterElementTab (props: any) {
    let jsxElement: JSX.Element;


    switch (props.tabVolume) {
        
            case 135:
                jsxElement = 
                    <div className='Footer__Tab135'/>;
                break;

            case 116:
                jsxElement = 
                    <div className='Footer__Tab116'/>;
                break;

            case 40:
                jsxElement = 
                    <div className='Footer__Tab40'/>;
                break;

            case 47:
                jsxElement = 
                    <div className='Footer__Tab47'/>;
                break;
            
            
        default:
                jsxElement = 
                <div className='Footer__Tab16'/>;
            break;       
    }   

	return (		
		jsxElement	
    )
}
export {FooterElementTab};      