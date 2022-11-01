import React from 'react'; 

import "./css/ButtonCatalogeList.css";

function ButtonCatalogeList (props: any) {

	return (		
		<div className='MainMenu__ButtonCatalogeList'>
            <div className='MainMenu__ButtonCatalogeListIcon'>
                <div className='MainMenu__ButtonCatalogeListIconLine' />
                <div className='MainMenu__ButtonCatalogeListIconTab' />
                <div className='MainMenu__ButtonCatalogeListIconLine' />
                <div className='MainMenu__ButtonCatalogeListIconTab' />
                <div className='MainMenu__ButtonCatalogeListIconLine' />
            </div>
            <div className='MainMenu__ButtonCatalogeListCaption'>
                Каталог
            </div>					
        </div>	
	)
}
export {ButtonCatalogeList};      