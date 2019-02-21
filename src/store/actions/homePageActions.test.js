import * as actionTypes from "./actionTypes";
import * as homePageActions from "./homePageActions";

const mockProduct = {
  title: "Blue Stripe Stoneware Plate",
  brand: "Kiriko",
  price: 40,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
  image: "blue.jpg",
  quantity: 1
};

const productData = [mockProduct];

describe("HomePage Action", () => {
  it("setProductData", () => {
    const expectedAction = {
      type: actionTypes.SET_PRODUCT_DATA,
      products: productData
    };
    expect(homePageActions.setProductData(productData)).toEqual(expectedAction);
  });

  it("viewProductDetails", () => {
    const expectedAction = {
      type: actionTypes.VIEW_PRODUCT_DETAILS,
      payload: mockProduct
    };
    expect(homePageActions.viewProductDetails(mockProduct)).toEqual(
      expectedAction
    );
  });
});
