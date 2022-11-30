import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SelectValuesByButtonsActivators } from "../../components/elements/Other/SelectValuesByButtonsActivators";

export default {
  title: "Other/SelectValuesByButtonsActivators",
  component: SelectValuesByButtonsActivators,
  argTypes: {},
} as ComponentMeta<typeof SelectValuesByButtonsActivators>;

const Template: ComponentStory<typeof SelectValuesByButtonsActivators> = (
  args
) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <SelectValuesByButtonsActivators {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
