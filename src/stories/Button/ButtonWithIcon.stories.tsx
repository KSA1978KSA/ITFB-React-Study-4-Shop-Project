import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonWithIcon } from "../../components/elements/Button/ButtonWithIcon";

export default {
  title: "Button/ButtonWithIcon",
  component: ButtonWithIcon,
  argTypes: {},
} as ComponentMeta<typeof ButtonWithIcon>;

const Template: ComponentStory<typeof ButtonWithIcon> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <ButtonWithIcon {...args} />
  </div>
);

export const Heart = Template.bind({});
Heart.args = {
  iconName: "heart",
  buttonText: "Избранное",
};

export const Package = Template.bind({});
Package.args = {
  iconName: "package",
  buttonText: "Заказы",
};

export const Basket = Template.bind({});
Basket.args = {
  iconName: "basket",
  buttonText: "Корзина",
};

/*

<ButtonWithIcon iconName="heart" buttonText={"Избранное"} />
      <ButtonWithIcon iconName="package" buttonText={"Заказы"} />
      <ButtonWithIcon iconName="basket" buttonText={"Корзина"} />

      */
