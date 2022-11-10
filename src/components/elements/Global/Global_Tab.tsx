import React from 'react'; 

function Global_Tab (props: any) {
    let jsxElement: JSX.Element;

    jsxElement = <div style={{display: 'flex', width: props.tabVolume}} className={'Global__HTab' + props.tabVolume}/>;        

	return (		
		jsxElement	
    )
}
export {Global_Tab};      