import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCard extends Component {
  render() {
    const { productName, productImg, productPrice, productId, productQty } = this.props;
    return (
      <div id="productCard" data-testid="product">
        <p data-testid="shopping-cart-product-name" id="name">{ productName }</p>
        <img src={ productImg } alt={ productName } />
        <p id="price">{ productPrice }</p>
        <p data-testid="shopping-cart-product-quantity">
          { productQty }
        </p>
      </div>
    );
  }
}

ShoppingCard.propTypes = {
  productName: PropTypes.string,
  productImg: PropTypes.string,
  productPrice: PropTypes.number,
  productId: PropTypes.string,
  productQty: PropTypes.number,
};

ShoppingCard.defaultProps = {
  productName: '',
  productImg: '',
  productPrice: 0,
  productId: '',
  productQty: 0,
};
