import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ReviewList extends Component {
  render() {
    const { reviews } = this.props;
    return (
      <div>
        {
          reviews.map(({ email, text, rating }, index) => (
            <section key={ index }>
              <p data-testid="review-card-email">{email}</p>
              <p data-testid="review-card-rating">{text}</p>
              <p data-testid="review-card-evaluation">{rating}</p>
            </section>
          ))
        }
      </div>
    );
  }
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
