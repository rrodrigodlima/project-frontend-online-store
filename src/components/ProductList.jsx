import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const { productList } = this.props;
    return (
      <div>
        {
          productList.length ? productList
            .map(({
              id,
              title,
              thumbnail,
              price,
            }) => (
              <ProductCard
                key={ id }
                productId={ id }
                productName={ title }
                productImg={ thumbnail }
                productPrice={ price }
              />))
            : (
              <p>Nenhum produto foi encontrado</p>
            )
        }
      </div>
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({})),
};

ProductList.defaultProps = {
  productList: [{}],
};

export default ProductList;
