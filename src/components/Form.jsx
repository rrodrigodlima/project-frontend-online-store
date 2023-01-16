import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { addReviews } from '../services/storage';

export default class Form extends Component {
  state = {
    email: '',
    text: '',
    rating: '0',
    isValid: false,
    clicked: false,
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
      clicked: false,
    }, () => this.validation());
  };

  validation = () => {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const { email, rating } = this.state;
    const validateEmail = regexEmail.test(email);
    const validateRating = rating > 0;
    const valid = validateEmail && validateRating;
    this.setState({
      isValid: valid,
    });
    return valid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, text, rating } = this.state;
    const { productId, updateReviews } = this.props;
    if (this.validation()) {
      const newReview = {
        email,
        text,
        rating,
      };
      const reviewsList = addReviews(productId, newReview);
      updateReviews(reviewsList);
      this.setState({
        email: '',
        text: '',
        rating: '0',
      });
    }
    this.setState({
      clicked: true,

    });
  };

  render() {
    const { email, text, clicked, isValid } = this.state;
    return (
      <form action="">
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={ email }
          data-testid="product-detail-email"
          onChange={ ({ target }) => this.handleChange('email', target.value) }
        />
        <div onChange={ ({ target }) => this.handleChange('rating', target.value) }>
          <label htmlFor="star1">
            <input
              type="radio"
              name="rating"
              id="star1"
              value="1"
              data-testid="1-rating"
            />
          </label>
          <label htmlFor="star2">
            <input
              type="radio"
              name="rating"
              id="star2"
              value="2"
              data-testid="2-rating"
            />
          </label>
          <label htmlFor="star3">
            <input
              type="radio"
              name="rating"
              id="star3"
              value="3"
              data-testid="3-rating"
            />
          </label>
          <label htmlFor="star4">
            <input
              type="radio"
              name="rating"
              id="star4"
              value="4"
              data-testid="4-rating"
            />
          </label>
          <label htmlFor="star5">
            <input
              type="radio"
              name="rating"
              id="star5"
              value="5"
              data-testid="5-rating"
            />
          </label>
        </div>
        <textarea
          data-testid="product-detail-evaluation"
          placeholder="Mensagem (opcional)"
          value={ text }
          id=""
          onChange={ ({ target }) => this.handleChange('text', target.value) }
        />
        <button
          type="submit"
          data-testid="submit-review-btn"
          onClick={ (event) => this.handleSubmit(event) }
        >
          Avaliar
        </button>
        {
          (!isValid && clicked)
          && <p data-testid="error-msg">Campos inválidos</p>
        }
      </form>
    );
  }
}

Form.propTypes = {
  productId: PropTypes.string.isRequired,
  updateReviews: PropTypes.func.isRequired,
};
