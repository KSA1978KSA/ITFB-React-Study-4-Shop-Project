import React from 'react'; 

import "./css/PageCatigory_AddedFilters.css";
import {PageCatigory_ButtonCloseble} from "./PageCatigory_ButtonCloseble";

function PageCatigory_AddedFilters (props: any) {

	return (		
		<div className='PageCatigory__AddedFilters'>
			<PageCatigory_ButtonCloseble buttonText={"Фильтр 4"} buttonColor={"Green"}/>
            <PageCatigory_ButtonCloseble buttonText={"Цена от 99 до 2599"} buttonColor={"Green"}/>
            <PageCatigory_ButtonCloseble buttonText={"Очистить фильтры"} />
        </div>	
	)
}
export {PageCatigory_AddedFilters};      