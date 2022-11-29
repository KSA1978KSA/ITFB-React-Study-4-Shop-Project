import React from "react";

import "./css/Footer.css";
import merch2 from "../../assets/pictures/merch2.png";
import { ButtonTextGroup } from "../elements/Footer/ButtonTextGroup";
import { ButtonSocialNetworkGroup } from "../elements/Footer/ButtonSocialNetworkGroup";
import { HTab } from "../elements/Global/HTab";
import { ButtonFhone } from "../elements/Footer/ButtonFhone";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <HTab tabVolume={116} />
        <img
          className="footer__merch"
          src={merch2}
          alt=""
          aria-hidden="true"
          data-noaft=""
        />
        <HTab tabVolume={40} />
        <ButtonTextGroup />
        <HTab tabVolume={135} />
        <ButtonSocialNetworkGroup />
        <HTab tabVolume={47} />
        <ButtonFhone />
      </div>
    </div>
  );
}
export { Footer };
