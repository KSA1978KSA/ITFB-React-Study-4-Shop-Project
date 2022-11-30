import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProductsBoard } from "../../components/elements/Other/ProductsBoard";

export default {
  title: "Other/ProductsBoard",
  component: ProductsBoard,
  argTypes: {},
} as ComponentMeta<typeof ProductsBoard>;

const Template: ComponentStory<typeof ProductsBoard> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <ProductsBoard {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {};
