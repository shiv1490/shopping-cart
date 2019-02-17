import axios from "axios";
import * as actionTypes from "./actionTypes";

export const setProductData = products => {
  return {
    type: actionTypes.SET_PRODUCT_DATA,
    products
  };
};

export const initProductData = () => {
  return dispatch => {
    axios
      .get("./products.json")
      .then(response => {
        dispatch(setProductData(response.data));
      })
      .catch(error => {
        console.error("fetch data failed");
      });
  };
};

export const viewProductDetails = product => {
  return {
    type: actionTypes.VIEW_PRODUCT_DETAILS,
    payload: product
  };
};
