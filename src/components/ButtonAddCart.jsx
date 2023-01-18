import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { addCart } from '../services/storage';

export default class ButtonAddCart extends Component {
  handleClick = () => {
    const { product, updateCounter } = this.props;
    addCart(product);
    updateCounter();
  };

  render() {
    const { testId } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid={ testId }
          onClick={ () => this.handleClick() }
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
  updateCounter: PropTypes.func.isRequired,
};
