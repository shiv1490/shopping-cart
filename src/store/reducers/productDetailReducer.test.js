import productDetailReducer from "./productDetailReducer";
import * as actionTypes from "../actions/actionTypes";

const mockProduct = {
  title: "Blue Stripe Stoneware Plate",
  brand: "Kiriko",
  price: 40,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
  image: "blue.jpg",
  quantity: 1
};

describe("Product Details Reducer", () => {
  it("should return the initial state", () => {
    expect(productDetailReducer(undefined, {})).toEqual({ products: null });
  });

  it("should add product to cart", () => {
    expect(
      productDetailReducer([], {
        type: actionTypes.ADD_TO_CART,
        payload: mockProduct
      })
    ).toEqual({ products: mockProduct });
  });
});
