import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SwitcherWithText } from "../../components/elements/Other/SwitcherWithText";

export default {
  title: "Other/SwitcherWithText",
  component: SwitcherWithText,
  argTypes: {},
} as ComponentMeta<typeof SwitcherWithText>;

const Template: ComponentStory<typeof SwitcherWithText> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <SwitcherWithText {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {
  text: "В наличии",
};
