import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonSwitcher } from "../../components/elements/Button/ButtonSwitcher";

export default {
  title: "Button/ButtonSwitcher",
  component: ButtonSwitcher,
  argTypes: {},
} as ComponentMeta<typeof ButtonSwitcher>;

const Template: ComponentStory<typeof ButtonSwitcher> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <ButtonSwitcher {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
