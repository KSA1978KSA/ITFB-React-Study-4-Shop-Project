import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonWithIconGroup } from "../../components/elements/ButtonGroup/ButtonWithIconGroup";

export default {
  title: "ButtonGroup/ButtonWithIconGroup",
  component: ButtonWithIconGroup,
  argTypes: {},
} as ComponentMeta<typeof ButtonWithIconGroup>;

const Template: ComponentStory<typeof ButtonWithIconGroup> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <ButtonWithIconGroup {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
