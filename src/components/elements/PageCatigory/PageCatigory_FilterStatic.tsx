import React from 'react';
import "./css/PageCatigory_FilterStatic.css";
import {PageCatigory_FilterStaticButton} from "./PageCatigory_FilterStaticButton";


function PageCatigory_FilterStatic () {
	return (
		<div className='PageCatigory__FilterStatic'>
			<PageCatigory_FilterStaticButton buttonText={"Товары нашего производства"} />
			<PageCatigory_FilterStaticButton buttonText={"Полезное питание"} />
			<PageCatigory_FilterStaticButton buttonText={"Без ГМО"} />
		</div>
	)
}
export {PageCatigory_FilterStatic};      