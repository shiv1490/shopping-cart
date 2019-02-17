import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
import Header from "../../components/header/header";
import { addToCart } from "../../store/actions/cartActions";
import { getFormattedCurrency } from "../../utilities/utilities";
import imageMappings from "../../ImageMapping";

const Title = styled(Card.Title)`
  font-size: xx-large;
`;

const AddCartButton = styled.button`
  color: white;
  background-color: #${props => (props.type === "view" ? "1d1d20" : "4a4a4d")};
  padding: 10px;
  font-weight: 500;
  margin: 5px;
  cursor: pointer;
  border: none;
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

const QuantityLabel = styled(Col)`
  padding: 20px;
  background: #eeeeee;
`;

const StyledRow = styled(Row)`
  justify-content: center;
  border-top: 1px solid #eeeeee;
  padding-top: 20px;
`;

export class ProductDetails extends Component {
  state = {
    quatnity: 1
  };

  addProductQuantity = () => {
    this.setState({ quatnity: this.state.quatnity + 1 });
  };

  subtractProductQuantity = () => {
    if (this.state.quatnity > 1) {
      this.setState({ quatnity: this.state.quatnity - 1 });
    }
  };

  render() {
    const productImageData = imageMappings;

    const { brand, title, price, description } = this.props.productDetails;

    return (
      <Fragment>
        <Header />
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>PLATES</Breadcrumb.Item>
            <Breadcrumb.Item active>{title}</Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col md={6}>
              <img src={productImageData[title]} alt="product" />
            </Col>
            <Col md={6} style={{ textAlign: "center" }}>
              <Card.Text>{brand}</Card.Text>
              <Title>{title}</Title>
              <Card.Text>{getFormattedCurrency(price)}</Card.Text>
              <Card.Text>{description}</Card.Text>
              <StyledRow>
                <QuantityLabel md={1}>{this.state.quatnity}</QuantityLabel>
                <Col md={1}>
                  <StyledButton onClick={this.addProductQuantity}>
                    +
                  </StyledButton>
                  <StyledButton onClick={this.subtractProductQuantity}>
                    -
                  </StyledButton>
                </Col>
                <Col md={4}>
                  <AddCartButton
                    type="add"
                    onClick={() =>
                      this.props.onAddToCart(
                        this.props.productDetails,
                        this.state.quatnity
                      )
                    }
                  >
                    ADD TO CART
                  </AddCartButton>
                </Col>
              </StyledRow>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    productDetails: state.homePageData.viewProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: (product, quantity) => dispatch(addToCart(product, quantity))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
