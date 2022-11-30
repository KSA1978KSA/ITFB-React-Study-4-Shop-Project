import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonActivator } from "../../components/elements/Button/ButtonActivator";

export default {
  title: "Button/ButtonActivator",
  component: ButtonActivator,
  argTypes: {},
} as ComponentMeta<typeof ButtonActivator>;

const Template: ComponentStory<typeof ButtonActivator> = (args) => (
  <div
    style={{
      display: "flex",
      height: "32px",
      gap: "24px",
    }}
    className="button-wrapper"
  >
    <ButtonActivator {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {
  buttonText: "Товары нашего производства",
};
