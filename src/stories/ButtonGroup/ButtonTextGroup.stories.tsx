import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonTextGroup } from "../../components/elements/ButtonGroup/ButtonTextGroup";

export default {
  title: "ButtonGroup/ButtonTextGroup",
  component: ButtonTextGroup,
  argTypes: {},
} as ComponentMeta<typeof ButtonTextGroup>;

const Template: ComponentStory<typeof ButtonTextGroup> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <ButtonTextGroup {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
