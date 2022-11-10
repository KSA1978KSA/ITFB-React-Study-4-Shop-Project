import React from 'react'; 
import { JsxAttribute } from 'typescript';

import "./css/Global_PageNavigator.css";

function PageNavigatorButton (props: any) {

    return (
            <div className='Global__PageNavigatorButton'>
                {props.buttonText}
            </div>
        )
}

function Global_PageNavigator (props: any) {

	return (		
        <div className='Global__PageNavigator'>            
            <div className='Global__PageNavigatorLeftButtons'>            
                <PageNavigatorButton buttonText={"<<"} />
                <PageNavigatorButton buttonText={"<"} />
            </div> 

            <div className='Global__PageNavigatorPageButtons'>            
                <PageNavigatorButton buttonText={"1"} />
                <PageNavigatorButton buttonText={"2"} />
                <PageNavigatorButton buttonText={"3"} />
                <PageNavigatorButton buttonText={"4"} />
                <PageNavigatorButton buttonText={"5"} />
                <PageNavigatorButton buttonText={"6"} />
                <PageNavigatorButton buttonText={"7"} />
                <PageNavigatorButton buttonText={"8"} />
            </div>

            <div className='Global__PageNavigatorRightButtons'>            
                <PageNavigatorButton buttonText={">"} />
                <PageNavigatorButton buttonText={">>"} />
            </div>
		</div>                   
	)
}
export {Global_PageNavigator};      