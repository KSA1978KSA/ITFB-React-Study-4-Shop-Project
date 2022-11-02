import React from 'react'; 

import "./css/Footer_ButtonTextArray.css";
import {ButtonText} from "./Footer_ButtonText";

function ButtonTextArray (props: any) {

	return (		
		<div className='Footer__ButtonTextArray'>
            <ButtonText buttonText={"О компании"} />
            <ButtonText buttonText={"Контакты"} />
            <ButtonText buttonText={"Вакансии"} />
            <ButtonText buttonText={"Статьи"} />
            <ButtonText buttonText={"Политика обработки персональных данных"} />
        </div>
	)
}
export {ButtonTextArray};      