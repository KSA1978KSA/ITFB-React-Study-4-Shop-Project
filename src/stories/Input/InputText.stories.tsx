import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputText } from "../../components/elements/Input/InputText";

export default {
  title: "Input/InputText",
  component: InputText,
  argTypes: {},
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <InputText />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
