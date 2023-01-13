import React, { Component } from 'react';
import ShoppingCard from '../components/ShoppingCard';
import { getCart } from '../services/storage';

class ShoppingCart extends Component {
  state = {
    cartList: [],
  };

  async componentDidMount() {
    const currentList = await getCart();
    this.setState({
      cartList: currentList || [],
    });
  }

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
          />))
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> }
      </section>
    );
  }
}

export default ShoppingCart;
