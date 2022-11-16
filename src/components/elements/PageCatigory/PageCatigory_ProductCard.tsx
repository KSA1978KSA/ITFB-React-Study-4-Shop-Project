import React from 'react';
import "./css/PageCatigory_ProductCard.css";
import icon_heart from "../../../assets/pictures/icon_heart.png";
import {Global_Tab} from "../Global/Global_Tab";
import {Global_RatingStars} from "../Global/Global_RatingStars";
import {Global_SimpleStickyButton} from "../Global/Global_SimpleStickyButton";


function PageCatigory_ProductCard (props: any) {
	return (
		<div className='PageCatigory__ProductCard'>
			<div className='PageCatigory__ProductCardPrint'>
				<div className='PageCatigory__ProductCardPrintWrapper'>
					<img className='PageCatigory__ProductCardPrintIcon' src={props.Print} alt="" aria-hidden="true" data-noaft="" />

					<div className='PageCatigory__ProductCardButtonLove'>
						<img className='PageCatigory__ProductCardButtonLoveIcon' src={icon_heart} alt="" aria-hidden="true" data-noaft="" />
					</div>
				</div>
			</div>


			<div className='PageCatigory__ProductCardDataWrapper'>			
				<div className='PageCatigory__ProductCardPriceWrapper'>
					<div className='PageCatigory__ProductCardPrice1'>					
						<div className='PageCatigory__ProductCardPrice1_Digit'>							
							{!props.Price1===false ? props.Price1  + " ₽" : ""}
						</div>
						<div className='PageCatigory__ProductCardPrice1_Caption'>							
							{props.Caption_Price1}
						</div>
					</div>

					<div className='PageCatigory__ProductCardPrice2'>
						<div className='PageCatigory__ProductCardPrice2_Digit'>						
							{!props.Price2===false ? props.Price2  + " ₽" : ""}							
						</div>
						<div className='PageCatigory__ProductCardPrice2_Caption'>						
							{props.Caption_Price2}							
						</div>
					</div>
				</div>

				<div className='PageCatigory__ProductCardName'>					
					{props.Name}			
				</div>

				<div className='PageCatigory__ProductRating'>
					<Global_RatingStars />
				</div>

				<Global_SimpleStickyButton 
					buttonText={"В корзину"}
					textSize={16}
					textColor={"#70C05B"}
					buttonColor={"#FFFFFF"}
					textColor_Pressed={"#FFFFFF"}
					buttonColor_Pressed={"#FF6633"}
					Button_State={props.InBasket}
				/>

			</div>
		</div>
	)
}
export {PageCatigory_ProductCard};      