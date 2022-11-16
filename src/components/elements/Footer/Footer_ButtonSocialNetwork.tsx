import React from 'react'; 

import "./css/Footer_ButtonSocialNetwork.css";

import icon_social_instagram from "../../../assets/pictures/icon_social_instagram.png";
import icon_social_vkontakte from "../../../assets/pictures/icon_social_vkontakte.png";
import icon_social_facebook from "../../../assets/pictures/icon_social_facebook.png";
import icon_social_ok from "../../../assets/pictures/icon_social_ok.png";




function ButtonSocialNetwork (props: any) {

    let jsxElement: JSX.Element;


    switch (props.iconName) {
        case "social_instagram":
            jsxElement = <img className='ButtonSocialNetworkImg' src={icon_social_instagram} alt="" aria-hidden="true" data-noaft="" />;
            break;

        case "icon_social_vkontakte":
            jsxElement = <img className='ButtonSocialNetworkImg' src={icon_social_vkontakte} alt="" aria-hidden="true" data-noaft="" />;
            break;

        case "icon_social_facebook":
            jsxElement = <img className='ButtonSocialNetworkImg' src={icon_social_facebook} alt="" aria-hidden="true" data-noaft="" />;
            break;

        case "icon_social_ok":
            jsxElement = <img className='ButtonSocialNetworkImg' src={icon_social_ok} alt="" aria-hidden="true" data-noaft="" />;
            break;
                            
        default:
            jsxElement = <img className='ButtonSocialNetworkImg' src={icon_social_instagram} alt="" aria-hidden="true" data-noaft="" />;
            break;       
    }   


	return (		
		jsxElement		
	)
}
export {ButtonSocialNetwork};      