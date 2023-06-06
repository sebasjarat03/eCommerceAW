import { items } from "../assets/items";
import { Cart } from "./Cart";

export default {
  title: "eCommerceAW/Cart",
  component: Cart,
  tags: ["autodocs"],
};

export const WithItems = {
  args: {
    items: [
      {
        id: 1,
        name: 'Macbook pro 16"',
        price: 3000,
        quantity: 1,
        totalPrice: 3000,
      },
      {
        id: 2,
        name: "iPhone 12",
        price: 1200,
        quantity: 2,
        totalPrice: 2400,
      },
      {
        id: 3,
        name: "iPad air",
        price: 1800,
        quantity: 3,
        totalPrice: 5400,
      },
    ],
    showCart: true,
  },
};

export const WithoutItems = {
  args: {
    items: [],
    showCart: true,
  },
};
