import cartReducer from "./cartReducer";
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

const cart = { cartTotal: 0, cart: [] };

describe("Cart Reducer", () => {
  it("should return the initial state", () => {
    expect(cartReducer(undefined, {})).toEqual({ cartTotal: 0, cart: [] });
  });

  it("should add or update quantity of a product", () => {
    const expectedRestult = {
      cart: [
        {
          brand: "Kiriko",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
          image: "blue.jpg",
          price: 40,
          quantity: 1,
          title: "Blue Stripe Stoneware Plate"
        }
      ],
      cartTotal: 40
    };
    expect(
      cartReducer(cart, {
        type: actionTypes.ADD_TO_CART,
        payload: mockProduct
      })
    ).toEqual(expectedRestult);
  });

  it("should add quantity of a product to cart", () => {
    const expectedRestult = {
      cart: [
        {
          brand: "Kiriko",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
          image: "blue.jpg",
          price: 40,
          quantity: 2,
          title: "Blue Stripe Stoneware Plate"
        }
      ],
      cartTotal: 80
    };
    expect(
      cartReducer(
        { cartTotal: 40, cart: [mockProduct] },
        {
          type: actionTypes.ADD_PRODUCT,
          payload: mockProduct
        }
      )
    ).toEqual(expectedRestult);
  });

  it("should subtract quantity of a product to cart", () => {
    debugger;
    const expectedRestult = {
      cart: [
        {
          brand: "Kiriko",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
          image: "blue.jpg",
          price: 40,
          quantity: 1,
          title: "Blue Stripe Stoneware Plate"
        }
      ],
      cartTotal: 40
    };

    const cartProduct = {
      title: "Blue Stripe Stoneware Plate",
      brand: "Kiriko",
      price: 40,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
      image: "blue.jpg",
      quantity: 3
    };

    expect(
      cartReducer(
        { cartTotal: 120, cart: [cartProduct] },
        {
          type: actionTypes.SUBTRACT_PRODUCT,
          payload: mockProduct
        }
      )
    ).toEqual(expectedRestult);
  });

  it("should remove product from cart", () => {
    expect(
      cartReducer(
        { cartTotal: 40, cart: [mockProduct] },
        {
          type: actionTypes.REMOVE_PRODUCT,
          payload: mockProduct
        }
      )
    ).toEqual({ cart: [], cartTotal: 0 });
  });
});
