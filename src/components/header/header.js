import React, { Component } from "react";
import Logo from "../../assets/images/logo.png";
import { connect } from "react-redux";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { removeProduct } from "../../store/actions/cartActions";
import CartPopup from "../cartPopup/cartPopup";
import { withRouter } from "react-router";

export class Header extends Component {
  goToCart = () => {
    this.props.history.push("/cart");
  };

  goToHomePage = () => {
    this.props.history.push("/");
  };

  render() {
    const cartCount =
      this.props.cartDetails &&
      this.props.cartDetails.reduce((sum, p) => {
        sum += p.quantity;
        return sum;
      }, 0);

    return (
      <Navbar bg="white" expand="lg">
        <Navbar.Brand>
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={this.goToHomePage}>HOME</Nav.Link>
            <NavDropdown title="SHOP" />
            <NavDropdown title="JOURNAL" id="basic-nav-dropdown" />
            <NavDropdown title="MORE" />
          </Nav>
          <Nav>
            <NavDropdown
              title={`MY CART ${cartCount !== 0 ? `(${cartCount})` : ""}`}
              id="basic-nav-dropdown"
              alignRight
            >
              <CartPopup
                cartDetails={this.props.cartDetails}
                cartTotal={this.props.cartTotal}
                removeProduct={this.props.onRemoveProduct}
                viewCart={() => this.goToCart()}
              />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartDetails: state.cartData.cart,
    cartTotal: state.cartData.cartTotal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveProduct: product => dispatch(removeProduct(product))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
