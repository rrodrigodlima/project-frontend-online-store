import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { increaseQty, decreaseQty, removeFromCart } from '../services/storage';
import ProductQty from './ProductQty';

export default class ShoppingCard extends Component {
  handleQty = (operation, itemId) => {
    const { updateCart } = this.props;
    if (operation === '+') {
      const updateList = increaseQty(itemId);
      updateCart(updateList);
    } else if (operation === '-') {
      const updateList = decreaseQty(itemId);
      updateCart(updateList);
    } else if (operation === 'x') {
      const updateList = removeFromCart(itemId);
      updateCart(updateList);
    }
  };

  render() {
    const { productName, productImg, productPrice, productQty, productId } = this.props;
    return (
      <div id="productCard" data-testid="product">
        <p data-testid="shopping-cart-product-name" id="name">{ productName }</p>
        <img src={ productImg } alt={ productName } />
        <p id="price">{ productPrice }</p>
        <ProductQty productQty={ productQty } />
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => this.handleQty('+', productId) }
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => this.handleQty('-', productId) }
        >
          -
        </button>
        <button
          type="button"
          onClick={ () => this.handleQty('x', productId) }
          data-testid="remove-product"
        >
          Remove
        </button>
      </div>
    );
  }
}

ShoppingCard.propTypes = {
  productName: PropTypes.string,
  productImg: PropTypes.string,
  productPrice: PropTypes.number,
  productQty: PropTypes.number,
  productId: PropTypes.string,
  updateCart: PropTypes.func,
};

ShoppingCard.defaultProps = {
  productName: '',
  productImg: '',
  productId: '',
  productPrice: 0,
  productQty: 0,
  updateCart: () => {},
};
