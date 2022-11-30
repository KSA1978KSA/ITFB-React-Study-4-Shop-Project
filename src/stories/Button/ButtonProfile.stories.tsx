import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonProfile } from "../../components/elements/Button/ButtonProfile";
import profileIcon1 from "../assets/profileIcon1.png";

export default {
  title: "Button/ButtonProfile",
  component: ButtonProfile,
  argTypes: {},
} as ComponentMeta<typeof ButtonProfile>;

const Template: ComponentStory<typeof ButtonProfile> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <ButtonProfile {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {
  buttonIcon: profileIcon1,
  buttonText: "Макакин",
};
