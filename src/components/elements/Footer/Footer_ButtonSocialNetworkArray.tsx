import React from "react";

import "./css/Footer_ButtonSocialNetworkArray.css";
import { ButtonSocialNetwork } from "./Footer_ButtonSocialNetwork";

function ButtonSocialNetworkArray(props: any) {
  return (
    <div className="Footer__ButtonSocialNetworkArray">
      <ButtonSocialNetwork iconName={"social_instagram"} />
      <ButtonSocialNetwork iconName={"icon_social_vkontakte"} />
      <ButtonSocialNetwork iconName={"icon_social_facebook"} />
      <ButtonSocialNetwork iconName={"icon_social_ok"} />
    </div>
  );
}
export { ButtonSocialNetworkArray };
