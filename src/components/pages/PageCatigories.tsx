import React from "react";
import "./css/PageCatigories.css";
import { CatigoryCard } from "../elements/PageCatigories/CatigoryCard";

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

import image1 from "../../assets/pictures/img1.png";
import image2 from "../../assets/pictures/img2.png";
import image3 from "../../assets/pictures/img3.png";
import image4 from "../../assets/pictures/img4.png";
import image5 from "../../assets/pictures/img5.png";
import image6 from "../../assets/pictures/img6.png";
import image7 from "../../assets/pictures/img7.png";
import image8 from "../../assets/pictures/img8.png";
import image9 from "../../assets/pictures/img9.png";
import image10 from "../../assets/pictures/img10.png";
import image11 from "../../assets/pictures/img11.png";
import image12 from "../../assets/pictures/img12.png";
import image13 from "../../assets/pictures/img13.png";

import { useNavigate } from "react-router-dom";

function PageCatigories() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-catigories__path">
        <div>Главная</div>
        <div>{"/"}</div>
        <div>Каталог</div>
      </div>
      <div className="page-catigories__header">Каталог</div>

      <div className="page-catigories__body">
        <div className="сatigory-сard_584">
          <CatigoryCard image={image1} CatigoryName={"Молоко, сыр, яйцо"} />
        </div>

        <div className="сatigory-сard_272">
          <CatigoryCard image={image2} shadowType={1} CatigoryName={"Хлеб"} />
        </div>

        <div className="сatigory-сard_272">
          <CatigoryCard image={image3} CatigoryName={"Фрукты и овощи"} />
        </div>

        <div className="сatigory-сard_272">
          <CatigoryCard image={image4} CatigoryName={"Замороженные продукты"} />
        </div>

        <div className="сatigory-сard_272">
          <CatigoryCard image={image5} CatigoryName={"Напитки"} />
        </div>

        <div className="сatigory-сard_272">
          <CatigoryCard image={image6} CatigoryName={"Кондитерские изделия"} />
        </div>

        <div className="сatigory-сard_272">
          <CatigoryCard image={image7} CatigoryName={"Чай, кофе"} />
        </div>

        <div className="сatigory-сard_272">
          <CatigoryCard image={image8} CatigoryName={"Бакалея"} />
        </div>

        <div className="сatigory-сard_272">
          <CatigoryCard image={image9} CatigoryName={"Здоровое питание"} />
        </div>

        <div className="сatigory-сard_584">
          <CatigoryCard image={image10} CatigoryName={"Зоотовары"} />
        </div>

        <div className="сatigory-сard_272">
          <CatigoryCard image={image11} CatigoryName={"Детское питание"} />
        </div>

        <div className="сatigory-сard_584">
          <CatigoryCard image={image12} CatigoryName={"Мясо, птица, колбаса"} />
        </div>

        <div className="сatigory-сard_272">
          <CatigoryCard
            image={image13}
            CatigoryName={"Непродовольственные товары"}
          />
        </div>
      </div>
    </div>
  );
}
export { PageCatigories };

/*
<button
              onClick={()=>{
                navigate(`/PageCatigory?test=${123}`);
              }}
            >Navigate</button>  
			*/
