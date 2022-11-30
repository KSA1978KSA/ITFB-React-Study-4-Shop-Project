import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CatigoryCard } from "../../components/elements/Other/CatigoryCard";

export default {
  title: "Other/CatigoryCard",
  component: CatigoryCard,
  argTypes: {},
} as ComponentMeta<typeof CatigoryCard>;

const Template: ComponentStory<typeof CatigoryCard> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <CatigoryCard {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
