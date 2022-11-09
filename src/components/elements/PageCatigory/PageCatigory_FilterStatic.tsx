import React from 'react';
import "./css/PageCatigory_FilterStatic.css";
import {Global_StaticButton} from "../Global/Global_StaticButton";


function PageCatigory_FilterStatic () {
	return (
		<div className='PageCatigory__FilterStatic'>
			<Global_StaticButton buttonText={"Товары нашего производства"} />
			<Global_StaticButton buttonText={"Полезное питание"} />
			<Global_StaticButton buttonText={"Без ГМО"} />
		</div>
	)
}
export {PageCatigory_FilterStatic};      