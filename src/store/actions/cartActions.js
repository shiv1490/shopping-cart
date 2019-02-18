import * as actionTypes from "./actionTypes";

export const addProduct = (product, quantity) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    payload: { ...product, quantity }
  };
};

export const removeProduct = product => {
  return {
    type: actionTypes.REMOVE_PRODUCT,
    payload: product
  };
};

export const subtractProduct = (product, quantity) => {
  return {
    type: actionTypes.SUBTRACT_PRODUCT,
    payload: { ...product, quantity }
  };
};

export const addToCart = (product, quantity) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: { ...product, quantity }
  };
};
