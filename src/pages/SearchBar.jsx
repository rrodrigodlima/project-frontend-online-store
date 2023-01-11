import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBarCategories from '../components/SideBarCategories';
import { getCategories } from '../services/api';

class SearchBar extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const categoriesList = await getCategories();
    this.setState({
      categories: categoriesList,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <section>
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        <label htmlFor="inputSearch">
          Digite os termos a serem buscados
          <input type="text" id="inputSearch" />
        </label>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <SideBarCategories categories={ categories } />
      </section>
    );
  }
}

export default SearchBar;
