import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageNavigator } from "../../components/elements/Other/PageNavigator";

export default {
  title: "Other/PageNavigator",
  component: PageNavigator,
  argTypes: {},
} as ComponentMeta<typeof PageNavigator>;

const Template: ComponentStory<typeof PageNavigator> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <PageNavigator {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
