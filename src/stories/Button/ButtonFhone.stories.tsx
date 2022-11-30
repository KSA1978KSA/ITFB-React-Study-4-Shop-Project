import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonFhone } from "../../components/elements/Button/ButtonFhone";

export default {
  title: "Button/ButtonFhone",
  component: ButtonFhone,
  argTypes: {},
} as ComponentMeta<typeof ButtonFhone>;

const Template: ComponentStory<typeof ButtonFhone> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <ButtonFhone {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
