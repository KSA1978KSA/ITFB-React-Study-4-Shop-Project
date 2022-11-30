import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProductCard } from "../../components/elements/Other/ProductCard";
import print_moloko_prostokvashino_1 from "../assets/print_maslo_prostokvashino_1.png";

export default {
  title: "Other/ProductCard",
  component: ProductCard,
  argTypes: {},
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <div
    style={{
      display: "flex",
    }}
    className="button-wrapper"
  >
    <ProductCard {...args} />
  </div>
);

export const Template1 = Template.bind({});
Template1.args = {
  Print: print_moloko_prostokvashino_1,
  Price1: 69.99,
  Caption_Price1: "С картой",
  Price2: 140.5,
  Caption_Price2: "Обычная",
  Name: (
    <div>
      Молоко ПРОСТОКВАШИНО паст.
      <br />
      питьевое цельное отборное ...
    </div>
  ),
};
