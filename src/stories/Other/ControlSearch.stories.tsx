import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ControlSearch } from "../../components/elements/Other/ControlSearch";

export default {
  title: "Other/ControlSearch",
  component: ControlSearch,
  argTypes: {},
} as ComponentMeta<typeof ControlSearch>;

const Template: ComponentStory<typeof ControlSearch> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <ControlSearch {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
