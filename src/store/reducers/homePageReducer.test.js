import homePagereducer from "./homePageReducer";
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

describe("Home Page Reducer", () => {
  it("should return the initial state", () => {
    expect(homePagereducer(undefined, {})).toEqual({ products: null });
  });

  it("should return product Data", () => {
    expect(
      homePagereducer([], {
        type: actionTypes.SET_PRODUCT_DATA,
        products: mockProduct
      })
    ).toEqual({ products: mockProduct });
  });

  it("should return view product Data", () => {
    expect(
      homePagereducer([], {
        type: actionTypes.VIEW_PRODUCT_DETAILS,
        payload: mockProduct
      })
    ).toEqual({ viewProduct: mockProduct });
  });

  it("should return addded Product", () => {
    expect(
      homePagereducer([], {
        type: actionTypes.ADD_TO_CART,
        payload: mockProduct
      })
    ).toEqual({ viewProduct: mockProduct });
  });
});
