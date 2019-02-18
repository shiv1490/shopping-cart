import React, { Fragment } from "react";
import styled from "styled-components";
import { Row, Col, Card } from "react-bootstrap";
import { getFormattedCurrency } from "../../utilities/utilities";
import imageMappings from "../../ImageMapping";

const StyledRow = styled(Row)`
  justify-content: center;
  margin-top: 10px;
  min-width: 30rem;
  border-bottom: 1px solid #eeeeee;
`;

const StyledImage = styled(Card.Img)`
  height: 15vh;
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

const StyledMainButton = styled.button`
  color: ${props => (props.type === "view" ? "black" : "white")};
  background-color: ${props => (props.type === "view" ? "white" : "black")};
  padding: 10px;
  font-weight: 500;
  margin: 5px;
  cursor: pointer;
  border: 1px solid;
  width: 100%;
`;

const Title = styled(Card.Title)`
  font-size: large;
`;

const cartPopup = props => {
  const productImageData = imageMappings;

  if (props.cartDetails && props.cartDetails.length === 0) return null;

  return (
    <Fragment>
      {props.cartDetails &&
        props.cartDetails.map(product => (
          <StyledRow key={product.title}>
            <Col md={11}>
              <Row>
                <Col md={3}>
                  <StyledImage
                    src={productImageData[product.title]}
                    alt="product"
                  />
                </Col>
                <Col md={7}>
                  <Title>{product.title}</Title>
                  <Title>X {product.quantity}</Title>
                  <Title>{product.brand}</Title>
                  <Title>
                    {getFormattedCurrency(product.price * product.quantity)}
                  </Title>
                </Col>
                <Col md={1}>
                  <StyledButton onClick={() => props.removeProduct(product)}>
                    X
                  </StyledButton>
                </Col>
              </Row>
            </Col>
          </StyledRow>
        ))}
      <Row style={{ padding: "4%" }}>
        <Col md={6}>TOTAL</Col>
        <Col md={6} style={{ textAlign: "right" }}>
          {getFormattedCurrency(props.cartTotal)}
        </Col>
        <Col md={6}>
          <StyledMainButton type="view" onClick={props.viewCart}>
            VIEW CART
          </StyledMainButton>
        </Col>
        <Col md={6}>
          <StyledMainButton type="checkout">CHECKOUT</StyledMainButton>
        </Col>
      </Row>
    </Fragment>
  );
};
export default cartPopup;
