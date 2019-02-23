import * as actionTypes from "./actionTypes";
import * as productDetailActions from "./productDetailActions";

const mockProduct = {
  title: "Blue Stripe Stoneware Plate",
  brand: "Kiriko",
  price: 40,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
  image: "blue.jpg"
};

describe("ProductDetail Actions Action", () => {
  it("addToCart", () => {
    const expectedAction = {
      payload: {
        brand: "Kiriko",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
        image: "blue.jpg",
        price: 40,
        title: "Blue Stripe Stoneware Plate"
      },
      quantity: 1,
      type: "ADD_TO_CART"
    };
    expect(productDetailActions.addToCart(mockProduct, 1)).toEqual(
      expectedAction
    );
  });
});
