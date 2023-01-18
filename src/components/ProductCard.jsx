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
      updateCounter } = this.props;
    console.log(updateCounter, 'productCard');
    return (
      <div id="productCard" data-testid="product">
        <Link
          to={ { pathname: `/product/${productId}`, state: { updateCounter } } }
          data-testid="product-detail-link"
        >
          <p id="name">{ productName }</p>
          <img src={ productImg } alt={ productName } />
          <p id="price">{ productPrice }</p>
        </Link>
        <ButtonAddCart
          testId="product-add-to-cart"
          product={ { productId, productName, productImg, productPrice } }
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
};

ProductCard.defaultProps = {
  productName: '',
  productImg: '',
  productPrice: 0,
  productId: '',
};
