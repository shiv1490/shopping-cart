import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Product from "../components/product/product";
import background from "../assets/images/background.jpg";
import { initProductData } from "./../store/actions/homePageActions";
import { viewProductDetails } from "./../store/actions/homePageActions";
import { addToCart } from "./../store/actions/cartActions";

const StyledImage = styled.img`
  width: 100%;
`;

export class HomePage extends Component {
  componentDidMount() {
    this.props.onLoadData();
  }

  viewProductDetails = (event, product) => {
    this.props.onViewProductDetails(product);
    this.props.history.push("/productDetails");
  };

  addProductToCart = (event, product) => {
    this.props.onAddToCart(product);
  };

  render() {
    return (
      <Fragment>
        <StyledImage src={background} alt="background" />
        <Product
          products={this.props.products}
          viewDetails={this.viewProductDetails}
          addToCart={this.addProductToCart}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.homePageData.products,
    cartDetails: state.cartData.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadData: () => dispatch(initProductData()),
    onViewProductDetails: product => dispatch(viewProductDetails(product)),
    onAddToCart: product => dispatch(addToCart(product, 1))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
