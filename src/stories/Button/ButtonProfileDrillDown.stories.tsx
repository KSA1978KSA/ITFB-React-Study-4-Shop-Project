import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonProfileDrillDown } from "../../components/elements/Button/ButtonProfileDrillDown";

export default {
  title: "Button/ButtonProfileDrillDown",
  component: ButtonProfileDrillDown,
  argTypes: {},
} as ComponentMeta<typeof ButtonProfileDrillDown>;

const Template: ComponentStory<typeof ButtonProfileDrillDown> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <ButtonProfileDrillDown {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
