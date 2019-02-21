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
      type: actionTypes.ADD_TO_CART,
      paylaod: mockProduct,
      quantity: 1
    };

    console.log(productDetailActions.addToCart(mockProduct, 1));
    expect(productDetailActions.addToCart(mockProduct, 1)).toEqual(
      expectedAction
    );
  });
});
