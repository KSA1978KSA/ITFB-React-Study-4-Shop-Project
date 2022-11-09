import React from 'react';
import "./css/PageCatigory_FilterPrice.css";
import {Global_SimpleButton} from "../Global/Global_SimpleButton";
import {Global_Input} from "../Global/Global_Input";
import {Global_Polzunok} from "../Global/Global_Polzunok";


function PageCatigory_FilterPrice () {
	return (
		<div className='PageCatigory__FilterPrice'>
                  
                  <div className='PageCatigory__FilterPriceWrapper1'>
                        <div className='PageCatigory__FilterPriceName'>
                              <div className='PageCatigory__FilterPriceNameText'>
                                    Цена
                              </div>
                        </div>
                        <div className='PageCatigory__FilterPriceButtonClear'>
                              <Global_SimpleButton buttonText={"Очистить"}/>    
                        </div>                    
                  </div>
                  <div className='PageCatigory__FilterPriceWrapper2'>
                        
                        <div className='PageCatigory__FilterPriceInput'>
                              <Global_Input />
                        </div>
                        <div className='PageCatigory__FilterPriceTire' />       
                        <div className='PageCatigory__FilterPriceInput'>                    
                              <Global_Input />
                        </div>
                                           
                  </div>
                  <div className='PageCatigory__FilterPriceWrapper3'>
                        <Global_Polzunok />
                  </div>
		</div>
	)
}
export {PageCatigory_FilterPrice};      