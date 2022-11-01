import React from 'react'; 

import "./css/ButtonsWithIconArray.css";
import {ButtonWithIcon} from "./ButtonWithIcon";

function ButtonsWithIconArray (props: any) {

	return (		
		<div className='MainMenu__ButtonsWithIconArray'>
            <ButtonWithIcon iconName="heart" buttonText={"Избранное"} />
            <ButtonWithIcon iconName="package" buttonText={"Заказы"} />
            <ButtonWithIcon iconName="basket" buttonText={"Корзина"} />
        </div>
	)
}
export {ButtonsWithIconArray};      