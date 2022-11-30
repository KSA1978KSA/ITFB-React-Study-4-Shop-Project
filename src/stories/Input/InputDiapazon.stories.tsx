import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputDiapazon } from "../../components/elements/Input/InputDiapazon";

export default {
  title: "Input/InputDiapazon",
  component: InputDiapazon,
  argTypes: {},
} as ComponentMeta<typeof InputDiapazon>;

const Template: ComponentStory<typeof InputDiapazon> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <InputDiapazon {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
