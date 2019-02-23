import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import HomePage from "../containers/Homepage";
import ProductDetails from "../components/productDetails/productDetails";
import Cart from "../containers/Cart";
import Header from "../components/header/header";

const Layout = props => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/productDetails" component={ProductDetails} exact />
          <Route path="/cart" component={Cart} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Layout;
