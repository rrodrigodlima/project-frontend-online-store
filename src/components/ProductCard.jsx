import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { productName, productImg, productPrice } = this.props;
    return (
      <div id="productCard" data-testid="product">
        <p id="name">{ productName }</p>
        <img src={ productImg } alt={ productName } />
        <p id="price">{ productPrice }</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  productName: PropTypes.string,
  productImg: PropTypes.string,
  productPrice: PropTypes.number,
};

ProductCard.defaultProps = {
  productName: '',
  productImg: '',
  productPrice: 0,
};
