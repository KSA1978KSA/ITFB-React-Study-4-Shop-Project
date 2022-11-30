import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonSocialNetwork } from "../../components/elements/Button/ButtonSocialNetwork";

export default {
  title: "Button/ButtonSocialNetwork",
  component: ButtonSocialNetwork,
  argTypes: {},
} as ComponentMeta<typeof ButtonSocialNetwork>;

const Template: ComponentStory<typeof ButtonSocialNetwork> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <ButtonSocialNetwork {...args} />
  </div>
);

export const Instagramm = Template.bind({});
Instagramm.args = {
  iconName: "social_instagram",
};

export const Vkontakte = Template.bind({});
Vkontakte.args = {
  iconName: "icon_social_vkontakte",
};

export const Facebook = Template.bind({});
Facebook.args = {
  iconName: "icon_social_facebook",
};

export const Ok = Template.bind({});
Ok.args = {
  iconName: "icon_social_ok",
};
