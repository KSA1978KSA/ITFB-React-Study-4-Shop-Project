import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonSticky } from "../../components/elements/Button/ButtonSticky";

export default {
  title: "Button/ButtonSticky",
  component: ButtonSticky,
  argTypes: {},
} as ComponentMeta<typeof ButtonSticky>;

const Template: ComponentStory<typeof ButtonSticky> = (args) => (
  <div
    style={{
      display: "flex",
      gap: "24px",
      height: "32px",
      width: "272px",
    }}
    className="button-wrapper"
  >
    <ButtonSticky {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {
  buttonText: "В корзину",
  textSize: 16,
  textColor: "#70C05B",
  buttonColor: "#FFFFFF",
  textColor_Pressed: "#FFFFFF",
  buttonColor_Pressed: "#FF6633",
  InBasket: 1,
};
