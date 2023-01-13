import React, { Component } from 'react';
import ShoppingCard from '../components/ShoppingCard';
import { getCart } from '../services/storage';

class ShoppingCart extends Component {
  state = {
    cartList: [],
  };

  componentDidMount() {
    const currentList = getCart();
    this.updateCart(currentList);
  }

  updateCart = (cart) => {
    // const currentList = getCart();
    this.setState({
      cartList: cart || [],
    });
  };

  render() {
    const { cartList } = this.state;
    return (
      <section>
        { cartList.length
          ? cartList.map(({
            productId,
            productName,
            productPrice,
            productImg,
            productQty,
          }) => (<ShoppingCard
            key={ `cart${productId}` }
            productId={ productId }
            productName={ productName }
            productQty={ productQty }
            productPrice={ productPrice }
            productImg={ productImg }
            updateCart={ this.updateCart }
          />))
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> }
      </section>
    );
  }
}

export default ShoppingCart;
