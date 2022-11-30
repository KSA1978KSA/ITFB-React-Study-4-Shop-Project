import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputNumber } from "../../components/elements/Input/InputNumber";

export default {
  title: "Input/InputNumber",
  component: InputNumber,
  argTypes: {},
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args) => (
  <div
    style={{
      display: "flex",
      gap: "24px",
      height: "32px",
      width: "100px",
    }}
    className="button-wrapper"
  >
    <InputNumber {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
