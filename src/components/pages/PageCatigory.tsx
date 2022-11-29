import React from "react";

import "./css/PageCatigory.css";
import { SelectValuesByButtonsActivators } from "../elements/PageCatigory/SelectValuesByButtonsActivators";
import { ProductsBoard } from "../elements/PageCatigory/ProductsBoard";
import { AddedValuesAsButtons } from "../elements/PageCatigory/AddedValuesAsButtons";
import { InputText } from "../elements/PageCatigory/InputText";
import { InputDiapazon } from "../elements/PageCatigory/InputDiapazon";
import { ListBox } from "../elements/PageCatigory/ListBox";
import { SwitcherWithText } from "../elements/PageCatigory/SwitcherWithText";
import { SimpleButton } from "../elements/Global/SimpleButton";
import { PageNavigator } from "../elements/Global/PageNavigator";

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
            <SimpleButton
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
            <div className="page-catigory__show-more-simple-button">
              <SimpleButton buttonText={"Показать ещё"} textSize={"16px"} />
            </div>
          </div>

          <div className="page-catigory__page-navigator">
            <PageNavigator />
          </div>
        </div>
      </div>
    </div>
  );
}
export { PageCatigory };
