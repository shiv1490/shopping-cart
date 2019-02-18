import * as actionTypes from "../actions/actionTypes";

const initialState = { cartTotal: 0, cart: [] };

const getUpdatedCartData = (cartProducts, selectedProduct, action) => {
  let index = cartProducts.findIndex(
    cartProd => cartProd.title === selectedProduct.title
  );
  switch (action) {
    case "addToCart":
      if (index < 0) {
        cartProducts.push(selectedProduct);
      } else
        cartProducts[index].quantity =
          selectedProduct.quantity + cartProducts[index].quantity;
      break;
    case "add":
      cartProducts[index].quantity =
        selectedProduct.quantity + cartProducts[index].quantity;
      break;
    case "subtract":
      cartProducts[index].quantity =
        cartProducts[index].quantity - selectedProduct.quantity;
      break;
    case "remove":
      cartProducts.splice(index, 1);
      break;
    default:
      return cartProducts;
  }

  return cartProducts;
};

const getUpdatedCartTotal = cartProducts => {
  return cartProducts.reduce((sum, p) => {
    sum += p.price * p.quantity;
    return sum;
  }, 0);
};

const cartReducer = (state = initialState, action) => {
  let updatedCart = [...state.cart];
  let selectedProduct = action.payload;
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: getUpdatedCartData(updatedCart, selectedProduct, "addToCart"),
        cartTotal: getUpdatedCartTotal(updatedCart)
      };
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        cart: getUpdatedCartData(updatedCart, selectedProduct, "add"),
        cartTotal: getUpdatedCartTotal(updatedCart)
      };
    case actionTypes.SUBTRACT_PRODUCT:
      return {
        ...state,
        cart: getUpdatedCartData(updatedCart, selectedProduct, "subtract"),
        cartTotal: getUpdatedCartTotal(updatedCart)
      };
    case actionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        cart: getUpdatedCartData(updatedCart, selectedProduct, "remove"),
        cartTotal: getUpdatedCartTotal(updatedCart)
      };
    default:
      return state;
  }
};

export default cartReducer;
