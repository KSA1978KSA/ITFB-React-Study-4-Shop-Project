import React from "react";

import "./css/ButtonSocialNetworkGroup.css";
import { ButtonSocialNetwork } from "./ButtonSocialNetwork";

function ButtonSocialNetworkGroup(props: any) {
  return (
    <div className="social-network-button-group">
      <ButtonSocialNetwork iconName={"social_instagram"} />
      <ButtonSocialNetwork iconName={"icon_social_vkontakte"} />
      <ButtonSocialNetwork iconName={"icon_social_facebook"} />
      <ButtonSocialNetwork iconName={"icon_social_ok"} />
    </div>
  );
}
export { ButtonSocialNetworkGroup };
