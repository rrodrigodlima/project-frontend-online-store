import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { addCart } from '../services/storage';

export default class ButtonAddCart extends Component {
  render() {
    const { testId, product } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid={ testId }
          onClick={ () => addCart(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ButtonAddCart.propTypes = {
  product: PropTypes.shape({}).isRequired,
  testId: PropTypes.string.isRequired,
};
