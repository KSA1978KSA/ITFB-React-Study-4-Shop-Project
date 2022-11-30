import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonText } from "../../components/elements/Button/ButtonText";

export default {
  title: "Button/ButtonText",
  component: ButtonText,
  argTypes: {},
} as ComponentMeta<typeof ButtonText>;

const Template: ComponentStory<typeof ButtonText> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <ButtonText {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {
  buttonText: "О компании",
};
