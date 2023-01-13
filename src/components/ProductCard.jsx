import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonAddCart from './ButtonAddCart';

export default class ProductCard extends Component {
  render() {
    const { productName, productImg, productPrice, productId } = this.props;
    return (
      <div id="productCard" data-testid="product">
        <Link to={ `/product/${productId}` } data-testid="product-detail-link">
          <p id="name">{ productName }</p>
          <img src={ productImg } alt={ productName } />
          <p id="price">{ productPrice }</p>
        </Link>
        <ButtonAddCart
          testId="product-add-to-cart"
          product={ { productId, productName, productImg, productPrice } }
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
};

ProductCard.defaultProps = {
  productName: '',
  productImg: '',
  productPrice: 0,
  productId: '',
};
