import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import { getFormattedCurrency } from "../../utilities/utilities";
import imageMappings from "../../ImageMapping";

const StyledContainer = styled(Container)`
  margin-top: 5%;
`;

const StyledCard = styled(Card)`
  margin-bottom: 30px;
  width: 18rem;
  text-align: center;
  border: none;
`;

const StyledImage = styled(Card.Img)`
  height: 40vh;
  ${StyledCard}:hover & {
    opacity: 0.3;
  }
`;

const ButtonContainer = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  ${StyledCard}:hover & {
    opacity: 0.8;
  }
`;

const StyledButton = styled.button`
  color: white;
  background-color: #${props => (props.type === "view" ? "1d1d20" : "4a4a4d")};
  padding: 10px;
  font-weight: 500;
  margin: 5px;
  cursor: pointer;
  border: none;
`;

const Product = props => {
  const productImageData = imageMappings;

  return (
    <StyledContainer>
      <Row>
        {props.products &&
          props.products.map(product => (
            <Col key={product.title} md={4}>
              <StyledCard>
                <StyledImage
                  variant="top"
                  src={productImageData[product.title]}
                />
                <Card.Body>
                  <Card.Title>{product.brand}</Card.Title>
                  <Card.Text>{product.title}</Card.Text>
                  <Card.Text>{getFormattedCurrency(product.price)}</Card.Text>
                  <ButtonContainer>
                    <StyledButton
                      type="view"
                      onClick={event => props.viewDetails(event, product)}
                    >
                      VIEW DETAILS
                    </StyledButton>
                    <StyledButton
                      type="add"
                      onClick={event => props.addToCart(event, product)}
                    >
                      ADD TO CART
                    </StyledButton>
                  </ButtonContainer>
                </Card.Body>
              </StyledCard>
            </Col>
          ))}
      </Row>
    </StyledContainer>
  );
};
export default Product;
