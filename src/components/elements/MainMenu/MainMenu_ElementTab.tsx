import React from 'react'; 

import "./css/MainMenu_ElementTab.css";

function MainMenuElementTab (props: any) {
    let jsxElement: JSX.Element;


    switch (props.tabVolume) {
        case 16:
            jsxElement = 
                <div className='MainMenu__Tab16'/>;
            break;
        
            case 24:
                jsxElement = 
                    <div className='MainMenu__Tab24'/>;
                break;

            case 40:
                jsxElement = 
                    <div className='MainMenu__Tab40'/>;
                break;
            case 116:
                jsxElement = 
                    <div className='MainMenu__Tab116'/>;
                break;
            
        default:
                jsxElement = 
                <div className='MainMenu__Tab16'/>;
            break;       
    }   

	return (		
		jsxElement	
    )
}
export {MainMenuElementTab};      