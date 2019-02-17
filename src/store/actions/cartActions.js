import * as actionTypes from "./actionTypes";

export const addProduct = product => {
  return {
    type: actionTypes.ADD_PRODUCT,
    selectedProduct: product
  };
};

export const removeProduct = product => {
  return {
    type: actionTypes.REMOVE_PRODUCT,
    selectedProduct: product
  };
};

export const subtractProduct = product => {
  return {
    type: actionTypes.SUBTRACT_PRODUCT,
    selectedProduct: product
  };
};

export const addToCart = (product, quantity) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: { ...product, quantity }
  };
};
