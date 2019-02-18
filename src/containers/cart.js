import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  addToCart,
  addProduct,
  removeProduct,
  subtractProduct
} from "../store/actions/cartActions";
import { getFormattedCurrency } from "../utilities/utilities";
import imageMappings from "../ImageMapping";

const Title = styled(Card.Title)`
  font-size: large;
`;

const QuantityLabel = styled(Col)`
  padding: 20px;
  background: #eeeeee;
`;

const StyledContainer = styled(Container)`
  background: white;
  padding-top: 30px;
  margin-top: 50px;
`;

const StyledButton = styled.button`
  display: block;
  background-color: #eeeeee;
  color: #8b8b8b;
  margin: 3px;
  border: none;
  font-weight: bold;
  width: 30px;
  cursor: pointer;
`;

const StyledImage = styled(Card.Img)`
  height: 30vh;
`;

const StyledCheckout = styled.button`
  color: white;
  background-color: #1d1d20;
  padding: 10px;
  font-weight: 500;
  margin: 5px;
  cursor: pointer;
  border: none;
`;

const StyledDiv = styled.div`
  background: #eeeeee;
`;

const StyledRow = styled(Row)`
  justify-content: center;
  border-top: 1px solid #eeeeee;
  margin-top: 20px;
  padding-top: 20px;
`;

const StyledTotalContainer = styled.div`
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  margin-top: 4%;
  margin-bottom: 2%;
  padding-top: 2%;
  text-align: right;
  padding-right: 25%;
`;

export class Cart extends Component {
  subtarctProductFromCart = (product, quantity) => {
    if (product.quantity > 1) {
      this.props.onSubtractProduct(product, quantity);
    }
  };

  render() {
    const productImageData = imageMappings;

    const totalCartAmount = getFormattedCurrency(this.props.cartTotal);

    return (
      <Fragment>
        <StyledDiv>
          <h1 style={{ textAlign: "center", paddingTop: "4%" }}>
            Shopping Cart
          </h1>
          <StyledContainer bg="white">
            <Row>
              <Col md={6}>Product</Col>
              <Col md={2}>Quantity</Col>
              <Col md={2}>TOTAL</Col>
              <Col md={2}>ACTION</Col>
            </Row>
            {this.props.cartDetails &&
              this.props.cartDetails.map(product => (
                <StyledRow key={product.title}>
                  <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <StyledImage
                          src={productImageData[product.title]}
                          alt="product"
                        />
                      </Col>
                      <Col md={6}>
                        <Title>{product.brand}</Title>
                        <Title>{product.title}</Title>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={1}>
                    <QuantityLabel md={1}>{product.quantity}</QuantityLabel>
                  </Col>
                  <Col md={1}>
                    <span />
                    <StyledButton
                      onClick={() => this.props.onAddProduct(product, 1)}
                    >
                      +
                    </StyledButton>
                    <StyledButton
                      onClick={() => this.subtarctProductFromCart(product, 1)}
                    >
                      -
                    </StyledButton>
                  </Col>
                  <Col md={2}>
                    {getFormattedCurrency(product.price * product.quantity)}
                  </Col>
                  <Col md={2}>
                    <StyledButton
                      onClick={() => this.props.onRemoveProduct(product)}
                    >
                      X
                    </StyledButton>
                  </Col>
                </StyledRow>
              ))}
            <StyledTotalContainer>
              <Title>CART OVERVIEW</Title>
              <Title>SUBTOTAL {totalCartAmount}</Title>
              <Title>TOTAL {totalCartAmount}</Title>
            </StyledTotalContainer>
            <div style={{ textAlign: "right" }}>
              <StyledCheckout>Checkout({totalCartAmount})</StyledCheckout>
            </div>
          </StyledContainer>
        </StyledDiv>
      </Fragment>
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
    onAddToCart: (product, quantity) => dispatch(addToCart(product, quantity)),
    onAddProduct: (product, quantity) =>
      dispatch(addProduct(product, quantity)),
    onSubtractProduct: (product, quantity) =>
      dispatch(subtractProduct(product, quantity)),
    onRemoveProduct: product => dispatch(removeProduct(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
