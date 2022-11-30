import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Polzunok } from "../../components/elements/Other/Polzunok";

export default {
  title: "Other/Polzunok",
  component: Polzunok,
  argTypes: {},
} as ComponentMeta<typeof Polzunok>;

const Template: ComponentStory<typeof Polzunok> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <Polzunok {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
