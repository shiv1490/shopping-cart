import * as actionTypes from "../actions/actionTypes";

const initialState = { products: null };

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT_DATA:
      return {
        ...state,
        products: action.products
      };
    case actionTypes.VIEW_PRODUCT_DETAILS:
      return {
        ...state,
        viewProduct: action.payload
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        viewProduct: action.payload
      };

    default:
      return state;
  }
};

export default homePageReducer;
