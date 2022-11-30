import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonCloseble } from "../../components/elements/Button/ButtonCloseble";

export default {
  title: "Button/ButtonCloseble",
  component: ButtonCloseble,
  argTypes: {},
} as ComponentMeta<typeof ButtonCloseble>;

const Template: ComponentStory<typeof ButtonCloseble> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <ButtonCloseble {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {
  buttonText: "Фильтр 4",
  buttonColor: "Green",
};
