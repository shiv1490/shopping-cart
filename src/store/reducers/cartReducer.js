import * as actionTypes from "../actions/actionTypes";

const initialState = { cartTotal: 0, cart: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let updatedCart = [...state.cart];
      let product = action.payload;
      var found = state.cart.some(function(el) {
        return el.title === product.title;
      });
      if (!found) {
        updatedCart.push(product);
      } else {
        updatedCart = updatedCart.map(cartProd => {
          if (cartProd.title === product.title) {
            cartProd.quantity = cartProd.quantity + product.quantity;
          }
          return cartProd;
        });
      }
      return {
        ...state,
        cart: updatedCart,
        cartTotal: updatedCart.reduce((sum, p) => {
          sum += p.price * p.quantity;
          return sum;
        }, 0)
      };
    default:
      return state;
  }
};

export default cartReducer;
