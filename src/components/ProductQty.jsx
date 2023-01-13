import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ProductQty extends Component {
  // shouldComponentUpdate(prevProp) {
  //   const { productQty } = this.props;
  //   return prevProp !== productQty;
  // }

  render() {
    const { productQty } = this.props;
    return (
      <div data-testid="shopping-cart-product-quantity">{ productQty }</div>
    );
  }
}

ProductQty.propTypes = {
  productQty: PropTypes.number.isRequired,
};
