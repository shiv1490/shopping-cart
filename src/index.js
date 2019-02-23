import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import homePageReducer from "./store/reducers/homePageReducer";
import cartReducer from "./store/reducers/cartReducer";
import productDetailReducer from "./store/reducers/productDetailReducer";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";

const rootReducer = combineReducers({
  homePageData: homePageReducer,
  cartData: cartReducer,
  productDetails: productDetailReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
