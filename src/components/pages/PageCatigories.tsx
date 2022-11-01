import React from 'react';
import "./css/PageCatigories.css";
import {CatigoryCard} from "../elements/CatigoryCard/CatigoryCard";

/* 
чтобы загрузить png, нужно создать кастомную папку с типами "types" и

создать там файл custom.d.ts:

declare module "*.png" {
  const value: any;
  export = value;
}

tsconfig.json:
"include": ["./src", "./types"],

*/


import image1 from "../../pictures/img1.png";
import image2 from "../../pictures/img2.png";
import image3 from "../../pictures/img3.png";
import image4 from "../../pictures/img4.png";
import image5 from "../../pictures/img5.png";
import image6 from "../../pictures/img6.png";
import image7 from "../../pictures/img7.png";
import image8 from "../../pictures/img8.png";
import image9 from "../../pictures/img9.png";
import image10 from "../../pictures/img10.png";
import image11 from "../../pictures/img11.png";
import image12 from "../../pictures/img12.png";
import image13 from "../../pictures/img13.png";


import {	
	useNavigate
  } from "react-router-dom";

function PageCatigories () {
	const navigate = useNavigate();

	return (
		<div className='PageCatigories'>			
			<div className='PageCatigoriesWrapper'>			
			<div className='PageCatigoriesWrapper__Tab116'/>
				<div className='PageCatigoriesContainer'>
					<div className='PageCatigoriesPath'>	
						<div>Главная</div>
						<div>{"/"}</div>
						<div>Каталог</div>
					</div>	
					<div className='PageCatigoriesHeader'>	
						Каталог
					</div>		
					
					<div className='PageCatigoriesBody'>

						<CatigoryCard  
							image={image1}
							cardType={0}
							CatigoryName={"Молоко, сыр, яйцо"}
							/>

						<CatigoryCard  
							image={image2}
							cardType={1}
							shadowType={1}
							CatigoryName={"Хлеб"}
							/>

						<CatigoryCard  
							image={image3}
							cardType={1}
							CatigoryName={"Фрукты и овощи"}
							/>
						
						<CatigoryCard  
							image={image4}
							cardType={1}
							CatigoryName={"Замороженные продукты"}
							/>

						<CatigoryCard  
							image={image5}
							cardType={1}
							CatigoryName={"Напитки"}
							/>
						
						<CatigoryCard  
							image={image6}
							cardType={1}
							CatigoryName={"Кондитерские изделия"}
							/>

						<CatigoryCard  
							image={image7}
							cardType={1}
							CatigoryName={"Чай, кофе"}
							/>

						<CatigoryCard  
							image={image8}
							cardType={1}
							CatigoryName={"Бакалея"}
							/>

						<CatigoryCard  
							image={image9}
							cardType={1}
							CatigoryName={"Здоровое питание"}
							/>

						<CatigoryCard  
							image={image10}
							cardType={0}
							CatigoryName={"Зоотовары"}
							/>

						<CatigoryCard  
							image={image11}
							cardType={1}
							CatigoryName={"Детское питание"}
							/>

						<CatigoryCard  
							image={image12}
							cardType={0}
							CatigoryName={"Мясо, птица, колбаса"}
							/>

						<CatigoryCard  
							image={image13}
							cardType={1}
							CatigoryName={"Непродовольственные товары"}
							/>


						</div>							
				</div>	
				<div className='PageCatigoriesBottom' />		
			</div>
		</div>
	)
}
export {PageCatigories};      


/*
<button
              onClick={()=>{
                navigate(`/PageCatigory?test=${123}`);
              }}
            >Navigate</button>  
			*/