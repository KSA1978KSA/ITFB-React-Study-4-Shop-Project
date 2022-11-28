import React from "react";
import "./css/ProductsBoard.css";
import { ProductCard } from "./ProductCard";

//--- временно загружаем сюда картинки, которые будут приходить с сервера
import print_dorblu_1 from "../../../assets/pictures/dinamic_prints/print_dorblu_1.png";
import print_moloko_prostokvashino_1 from "../../../assets/pictures/dinamic_prints/print_moloko_prostokvashino_1.png";
import print_moloko_egorka_1 from "../../../assets/pictures/dinamic_prints/print_moloko_egorka_1.png";
import print_maslo_prostokvashino_1 from "../../../assets/pictures/dinamic_prints/print_maslo_prostokvashino_1.png";
import print_yogurt_fruttis_1 from "../../../assets/pictures/dinamic_prints/print_yogurt_fruttis_1.png";
import print_yogurt_fruttis_2 from "../../../assets/pictures/dinamic_prints/print_yogurt_fruttis_2.png";

function ProductsBoard() {
  return (
    <div className="products-board">
      <ProductCard
        Print={print_dorblu_1}
        Price1={139.99}
        Name={
          <div>
            Комбайн КЗС-1218
            <br />
            «ДЕСНА-ПОЛЕСЬЕ GS12»
          </div>
        }
      />
      <ProductCard
        Print={print_moloko_prostokvashino_1}
        Price1={69.99}
        Caption_Price1={"С картой"}
        Price2={140.5}
        Caption_Price2={"Обычная"}
        Name={
          <div>
            Молоко ПРОСТОКВАШИНО паст.
            <br />
            питьевое цельное отборное ...
          </div>
        }
      />
      <ProductCard
        Print={print_moloko_egorka_1}
        Price1={77.99}
        Caption_Price1={"С картой"}
        Price2={168.5}
        Caption_Price2={"Обычная"}
        Name={
          <div>
            Молоко сгущенное РОГАЧЕВ
            <br />
            Егорка, цельное с сахаром...
          </div>
        }
        InBasket={1}
      />
      <ProductCard
        Print={print_maslo_prostokvashino_1}
        Price1={192.99}
        Name={
          <div>
            Комбайн КЗС-1218
            <br />
            «ДЕСНА-ПОЛЕСЬЕ GS12»
          </div>
        }
      />
      <ProductCard
        Print={print_yogurt_fruttis_1}
        Price1={29.99}
        Name={
          <div>
            Комбайн КЗС-1218
            <br />
            «ДЕСНА-ПОЛЕСЬЕ GS12»
          </div>
        }
      />
      <ProductCard
        Print={print_yogurt_fruttis_2}
        Price1={29.99}
        Name={
          <div>
            Комбайн КЗС-1218
            <br />
            «ДЕСНА-ПОЛЕСЬЕ GS12»
          </div>
        }
      />
    </div>
  );
}
export { ProductsBoard };
