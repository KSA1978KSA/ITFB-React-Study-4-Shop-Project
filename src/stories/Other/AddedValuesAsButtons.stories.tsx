import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AddedValuesAsButtons } from "../../components/elements/Other/AddedValuesAsButtons";

export default {
  title: "Other/AddedValuesAsButtons",
  component: AddedValuesAsButtons,
  argTypes: {},
} as ComponentMeta<typeof AddedValuesAsButtons>;

const Template: ComponentStory<typeof AddedValuesAsButtons> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <AddedValuesAsButtons {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
