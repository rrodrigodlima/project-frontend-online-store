import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonAddCart from './ButtonAddCart';

export default class ProductCard extends Component {
  render() {
    const { productName,
      productImg,
      productPrice,
      productId,
      updateCounter, freeShipping, availableQuantity } = this.props;
    console.log(availableQuantity);
    return (
      <div id="productCard" data-testid="product">
        <Link
          to={ { pathname: `/product/${productId}` } }
          data-testid="product-detail-link"
        >
          <p id="name">{ productName }</p>
          <img src={ productImg } alt={ productName } />
          <p id="price">{ productPrice }</p>
        </Link>
        {
          freeShipping && <p data-testid="free-shipping">Frete Grátis</p>
        }
        <ButtonAddCart
          testId="product-add-to-cart"
          product={ { productId,
            productName,
            productImg,
            productPrice,
            availableQuantity } }
          updateCounter={ updateCounter }
        />
      </div>
    );
  }
}

ProductCard.propTypes = {
  productName: PropTypes.string,
  productImg: PropTypes.string,
  productPrice: PropTypes.number,
  productId: PropTypes.string,
  updateCounter: PropTypes.func.isRequired,
  freeShipping: PropTypes.bool,
  availableQuantity: PropTypes.number.isRequired,
};

ProductCard.defaultProps = {
  productName: '',
  productImg: '',
  productPrice: 0,
  productId: '',
  freeShipping: false,
};
