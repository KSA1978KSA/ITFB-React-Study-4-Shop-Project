import React from "react";

import "./css/PageCatigory.css";
import { SelectValuesByButtonsActivators } from "../elements/PageCatigory/SelectValuesByButtonsActivators";
import { ProductsBoard } from "../elements/PageCatigory/ProductsBoard";
import { AddedValuesAsButtons } from "../elements/PageCatigory/AddedValuesAsButtons";
import { InputText } from "../elements/PageCatigory/InputText";
import { InputDiapazon } from "../elements/PageCatigory/InputDiapazon";
import { ListBox } from "../elements/PageCatigory/ListBox";
import { SwitcherWithText } from "../elements/PageCatigory/SwitcherWithText";
import { Global_SimpleButton } from "../elements/Global/Global_SimpleButton";
import { Global_PageNavigator } from "../elements/Global/Global_PageNavigator";

import { useNavigate } from "react-router-dom";

function PageCatigory() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-catigory__path">
        <div>Главная</div>
        <div>{"/"}</div>
        <div>Каталог</div>
        <div>{"/"}</div>
        <div>Молоко, сыр, яйцо</div>
      </div>

      <div className="page-catigory__header">Молоко, сыр, яйцо</div>

      <div className="page-catigory__body">
        <SelectValuesByButtonsActivators />
      </div>

      <div className="page-catigory__body-panel-wrapper">
        <div className="page-catigory__body-panel-filter">
          <InputText />
          <InputDiapazon />
          <ListBox />
          <SwitcherWithText text={"В наличии"} />

          <div className="page-catigory__body-panel-apply-filter">
            <Global_SimpleButton
              buttonText={"Применить"}
              buttonColor={"#FF6633"}
              textColor={"#FFFFFF"}
              textSize={"16px"}
            />
          </div>
        </div>

        <div className="page-catigory__body-panel-products">
          <AddedValuesAsButtons />
          <ProductsBoard />
          <div className="page-catigory__show-more">
            <div className="page-catigory__show-more-wrapper">
              <Global_SimpleButton
                buttonText={"Показать ещё"}
                textSize={"16px"}
              />
            </div>
          </div>

          <div className="page-catigory__page-navigator">
            <Global_PageNavigator />
          </div>
        </div>
      </div>
    </div>
  );
}
export { PageCatigory };
