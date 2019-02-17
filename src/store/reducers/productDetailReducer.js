import * as actionTypes from "../actions/actionTypes";

const initialState = { products: null };

const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};

export default productDetailReducer;
