import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RatingStars } from "../../components/elements/Other/RatingStars";

export default {
  title: "Other/RatingStars",
  component: RatingStars,
  argTypes: {},
} as ComponentMeta<typeof RatingStars>;

const Template: ComponentStory<typeof RatingStars> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <RatingStars {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
