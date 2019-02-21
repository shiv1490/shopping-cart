import * as actionTypes from "./actionTypes";
import * as cartActions from "./cartActions";

const mockProduct = {
  title: "Blue Stripe Stoneware Plate",
  brand: "Kiriko",
  price: 40,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
  image: "blue.jpg",
  quantity: 1
};

describe("Cart Actions", () => {
  it("Add Product", () => {
    const expectedAction = {
      type: actionTypes.ADD_PRODUCT,
      payload: mockProduct
    };
    expect(cartActions.addProduct(mockProduct, 1)).toEqual(expectedAction);
  });

  it("Remove Product", () => {
    const expectedAction = {
      type: actionTypes.REMOVE_PRODUCT,
      payload: mockProduct
    };
    expect(cartActions.removeProduct(mockProduct)).toEqual(expectedAction);
  });

  it("subtractProduct", () => {
    const expectedAction = {
      type: actionTypes.SUBTRACT_PRODUCT,
      payload: mockProduct
    };
    expect(cartActions.subtractProduct(mockProduct, 1)).toEqual(expectedAction);
  });

  it("addToCart", () => {
    const expectedAction = {
      type: actionTypes.ADD_TO_CART,
      payload: mockProduct
    };
    expect(cartActions.addToCart(mockProduct, 1)).toEqual(expectedAction);
  });
});
