import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonCatalogeList } from "../../components/elements/Button/ButtonCatalogeList";

export default {
  title: "Button/ButtonCatalogeList",
  component: ButtonCatalogeList,
  argTypes: {},
} as ComponentMeta<typeof ButtonCatalogeList>;

const Template: ComponentStory<typeof ButtonCatalogeList> = (args) => (
  <ButtonCatalogeList {...args} />
);

export const Template1 = Template.bind({});
Template1.args = {};
