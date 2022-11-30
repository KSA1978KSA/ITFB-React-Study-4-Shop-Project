import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ListBox } from "../../components/elements/Other/ListBox";

export default {
  title: "Other/ListBox",
  component: ListBox,
  argTypes: {},
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <ListBox {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
