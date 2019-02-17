import * as actionTypes from "./actionTypes";

export const addToCart = (product, quantity) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
    quantity
  };
};
