import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonAddCart from '../components/ButtonAddCart';
import { getProductById } from '../services/api';
import Form from '../components/Form';
import ReviewList from '../components/ReviewList';
import { getReviews } from '../services/storage';

class ProductDetails extends Component {
  state = {
    productDetails: [],
    loading: true,
    reviews: [],
    counter: '0',
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const currentReviews = getReviews(id);
    const getProducts = await getProductById(id);
    this.setState({
      productDetails: getProducts,
      loading: false,
    });
    this.updateReviews(currentReviews);
    this.updateCounter();
  }

  updateReviews = (newReview) => {
    this.setState({
      reviews: newReview,
    });
  };

  updateCounter = () => {
    const result = localStorage.getItem('counter');
    this.setState({
      counter: result,
    });
  };

  render() {
    const { productDetails:
      { title, price, thumbnail, attributes, id },
    loading, reviews, counter } = this.state;
    const product = {
      productId: id, productName: title, productImg: thumbnail, productPrice: price };
    if (loading) return <p>loading</p>;
    return (
      <div id="details">
        <p id="name" data-testid="product-detail-name">{ title }</p>
        <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
        <p id="price" data-testid="product-detail-price">{ price }</p>
        <ul id="attributes">
          {
            attributes.map(({ name, value_id: valueId, value_name: valueName }) => (
              <li key={ `${name}: ${valueId}` }>
                { `${name}: ${valueName}` }
              </li>
            ))
          }
        </ul>
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          Shopping Cart
          <span
            data-testid="shopping-cart-size"
          >
            {counter}
          </span>
        </Link>
        <ButtonAddCart
          testId="product-detail-add-to-cart"
          product={ product }
          updateCounter={ this.updateCounter }
        />
        <Form productId={ id } updateReviews={ this.updateReviews } />
        <ReviewList reviews={ reviews } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }),
};

ProductDetails.defaultProps = {
  match: { params: { id: '' } },
};

export default ProductDetails;
