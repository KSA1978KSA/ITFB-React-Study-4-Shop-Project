import React from 'react'; 

import "./css/Global_Tab.css";

function Global_Tab (props: any) {
    let jsxElement: JSX.Element;


    switch (props.tabVolume) {
        case 16:
            jsxElement = 
                <div className='Global__HTab16'/>;
            break;
        
            case 24:
                jsxElement = 
                    <div className='Global__HTab24'/>;
                break;

            case 40:
                jsxElement = 
                    <div className='Global__HTab40'/>;
                break;

            case 47:
                jsxElement = 
                    <div className='Global__HTab47'/>;
                break;

            case 116:
                jsxElement = 
                    <div className='Global__HTab116'/>;
                break;

            case 135:
                jsxElement = 
                    <div className='Global__HTab135'/>;
                break;
            
        default:
                jsxElement = 
                <div className='Global__HTab16'/>;
            break;       
    }   

	return (		
		jsxElement	
    )
}
export {Global_Tab};      