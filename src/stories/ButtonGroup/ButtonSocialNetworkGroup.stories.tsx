import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonSocialNetworkGroup } from "../../components/elements/ButtonGroup/ButtonSocialNetworkGroup";

export default {
  title: "ButtonGroup/ButtonSocialNetworkGroup",
  component: ButtonSocialNetworkGroup,
  argTypes: {},
} as ComponentMeta<typeof ButtonSocialNetworkGroup>;

const Template: ComponentStory<typeof ButtonSocialNetworkGroup> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <ButtonSocialNetworkGroup {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
