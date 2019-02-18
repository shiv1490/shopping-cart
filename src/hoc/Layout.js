import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../containers/Homepage";
import ProductDetails from "../components/productDetails/productDetails";
import Cart from "../containers/Cart";
import Header from "../components/header/header";

const Layout = props => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/productDetails" component={ProductDetails} exact />
        <Route path="/cart" component={Cart} exact />
      </Switch>
    </Fragment>
  );
};
export default Layout;
