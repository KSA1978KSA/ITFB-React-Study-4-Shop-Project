import React from "react";

import "./css/PageCatigory.css";
import { PageCatigory_FilterStatic } from "../elements/PageCatigory/PageCatigory_FilterStatic";
import { PageCatigory_ProductsWrapper } from "../elements/PageCatigory/PageCatigory_ProductsWrapper";
import { PageCatigory_AddedFilters } from "../elements/PageCatigory/PageCatigory_AddedFilters";
import { PageCatigory_FilterName } from "../elements/PageCatigory/PageCatigory_FilterName";
import { PageCatigory_FilterPrice } from "../elements/PageCatigory/PageCatigory_FilterPrice";
import { PageCatigory_FilteredCatigories } from "../elements/PageCatigory/PageCatigory_FilteredCatigories";
import { PageCatigory_FilterInStock } from "../elements/PageCatigory/PageCatigory_FilterInStock";
import { Global_SimpleButton } from "../elements/Global/Global_SimpleButton";
import { Global_PageNavigator } from "../elements/Global/Global_PageNavigator";

import { useNavigate } from "react-router-dom";

function PageCatigory() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="PageCatigory__Path">
        <div>Главная</div>
        <div>{"/"}</div>
        <div>Каталог</div>
        <div>{"/"}</div>
        <div>Молоко, сыр, яйцо</div>
      </div>

      <div className="PageCatigory__Header">Молоко, сыр, яйцо</div>

      <div className="PageCatigory__Body">
        <PageCatigory_FilterStatic />
      </div>

      <div className="PageCatigory__BodyPanelWrapper">
        <div className="PageCatigory__BodyPanelFilter">
          <PageCatigory_FilterName />
          <PageCatigory_FilterPrice />
          <PageCatigory_FilteredCatigories />
          <PageCatigory_FilterInStock />

          <div className="PageCatigory__BodyPanelApplyFilter">
            <Global_SimpleButton
              buttonText={"Применить"}
              buttonColor={"#FF6633"}
              textColor={"#FFFFFF"}
              textSize={"16px"}
            />
          </div>
        </div>

        <div className="PageCatigory__BodyPanelProducts">
          <PageCatigory_AddedFilters />
          <PageCatigory_ProductsWrapper />
          <div className="PageCatigory__ShowMore">
            <div className="PageCatigory__ShowMoreWrapper">
              <Global_SimpleButton
                buttonText={"Показать ещё"}
                textSize={"16px"}
              />
            </div>
          </div>

          <div className="PageCatigory__PageNavigator">
            <Global_PageNavigator />
          </div>
        </div>
      </div>
    </div>
  );
}
export { PageCatigory };
