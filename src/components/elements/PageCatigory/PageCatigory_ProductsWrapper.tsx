import React from 'react';
import "./css/PageCatigory_ProductsWrapper.css";
import {PageCatigory_ProductCard} from "./PageCatigory_ProductCard";

//--- временно загружаем сюда картинки, которые будут приходить с сервера
import print_dorblu_1 from "../../../assets/pictures/dinamic_prints/print_dorblu_1.png";
import print_moloko_prostokvashino_1 from "../../../assets/pictures/dinamic_prints/print_moloko_prostokvashino_1.png";
import print_moloko_egorka_1 from "../../../assets/pictures/dinamic_prints/print_moloko_egorka_1.png";
import print_maslo_prostokvashino_1 from "../../../assets/pictures/dinamic_prints/print_maslo_prostokvashino_1.png";
import print_yogurt_fruttis_1 from "../../../assets/pictures/dinamic_prints/print_yogurt_fruttis_1.png";
import print_yogurt_fruttis_2 from "../../../assets/pictures/dinamic_prints/print_yogurt_fruttis_2.png";





function PageCatigory_ProductsWrapper () {
	return (
		<div className='PageCatigory__ProductsWrapper'>
			<PageCatigory_ProductCard 
                Print={print_dorblu_1} 
                Price1={139.99}
                Name={<div>Комбайн КЗС-1218<br/>«ДЕСНА-ПОЛЕСЬЕ GS12»</div>}                
            />
            <PageCatigory_ProductCard 
                Print={print_moloko_prostokvashino_1} 
                Price1={69.99} 
                Caption_Price1={"С картой"}
                Price2={140.50} 
                Caption_Price2={"Обычная"}
                Name={<div>Молоко ПРОСТОКВАШИНО паст.<br/>питьевое цельное отборное ...</div>}
            />
            <PageCatigory_ProductCard 
                Print={print_moloko_egorka_1}
                Price1={77.99} 
                Caption_Price1={"С картой"}
                Price2={168.50} 
                Caption_Price2={"Обычная"}
                Name={<div>Молоко сгущенное РОГАЧЕВ<br/>Егорка, цельное с сахаром...</div>}
                InBasket={1}
            />
            <PageCatigory_ProductCard 
                Print={print_maslo_prostokvashino_1}
                Price1={192.99} 
                Name={<div>Комбайн КЗС-1218<br/>«ДЕСНА-ПОЛЕСЬЕ GS12»</div>}
            />
            <PageCatigory_ProductCard 
                Print={print_yogurt_fruttis_1}
                Price1={29.99} 
                Name={<div>Комбайн КЗС-1218<br/>«ДЕСНА-ПОЛЕСЬЕ GS12»</div>}
            />
            <PageCatigory_ProductCard 
                Print={print_yogurt_fruttis_2}
                Price1={29.99} 
                Name={<div>Комбайн КЗС-1218<br/>«ДЕСНА-ПОЛЕСЬЕ GS12»</div>}
            />
		</div>
	)
}
export {PageCatigory_ProductsWrapper};      