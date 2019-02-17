import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./containers/Homepage";
import ProductDetails from "./components/productDetails/productDetails";
import Cart from "./containers/cart";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/productDetails" component={ProductDetails} exact />
        <Route path="/cart" component={Cart} exact />
      </Switch>
    );
  }
}

export default App;
