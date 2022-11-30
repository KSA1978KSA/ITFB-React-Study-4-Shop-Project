import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HTab } from "../../components/elements/Other/HTab";

export default {
  title: "Other/HTab",
  component: HTab,
  argTypes: {},
} as ComponentMeta<typeof HTab>;

const Template: ComponentStory<typeof HTab> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <HTab {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
