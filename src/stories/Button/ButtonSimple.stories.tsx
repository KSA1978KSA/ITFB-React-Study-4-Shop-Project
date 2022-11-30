import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonSimple } from "../../components/elements/Button/ButtonSimple";

export default {
  title: "Button/ButtonSimple",
  component: ButtonSimple,
  argTypes: {},
} as ComponentMeta<typeof ButtonSimple>;

const Template: ComponentStory<typeof ButtonSimple> = (args) => (
  <div
    style={{
      display: "flex",
      gap: "24px",
      height: "32px",
      width: "272px",
    }}
    className="button-wrapper"
  >
    <ButtonSimple {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {
  buttonText: "Применить",
  buttonColor: "#FF6633",
  textColor: "#FFFFFF",
  textSize: "16px",
};
