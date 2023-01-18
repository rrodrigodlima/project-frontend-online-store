import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const { productList, updateCounter } = this.props;
    console.log(productList);
    return (
      <div>
        {
          productList.length ? productList
            .map(({
              id,
              title,
              thumbnail,
              price,
              available_quantity: availableQuantity,
              shipping: { free_shipping: freeShipping },
            }) => (
              <ProductCard
                key={ id }
                productId={ id }
                productName={ title }
                productImg={ thumbnail }
                productPrice={ price }
                updateCounter={ updateCounter }
                availableQuantity={ availableQuantity }
                freeShipping={ freeShipping }
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
  updateCounter: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
  productList: [{}],
};

export default ProductList;
