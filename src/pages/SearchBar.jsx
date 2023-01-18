import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBarCategories from '../components/SideBarCategories';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from '../components/ProductList';
import { counterCart } from '../services/storage';

class SearchBar extends Component {
  state = {
    categories: [],
    inputSearch: '',
    productList: [],
    counter: '0',
  };

  async componentDidMount() {
    const categoriesList = await getCategories();
    const counter = counterCart();
    this.setState({
      categories: categoriesList,
      counter,
    });
  }

  updateCounter = () => {
    const counter = counterCart();
    this.setState({
      counter,
    });
  };

  handleChange = (value) => (
    this.setState({ inputSearch: value || '' })
  );

  handleChangeRadio = async (value) => {
    const getProducts = await getProductsFromCategoryAndQuery(value);
    this.setState({
      productList: getProducts.results,
    });
  };

  handleClick = async () => {
    const { inputSearch } = this.state;
    const getProducts = await getProductsFromCategoryAndQuery('', inputSearch);
    this.setState({
      productList: getProducts.results,
    });
    this.setState({ inputSearch: '' });
  };

  render() {
    const { categories, inputSearch, productList, counter } = this.state;
    return (
      <section>
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
          <span
            data-testid="shopping-cart-size"
          >
            {counter}
          </span>
        </Link>
        <label htmlFor="inputSearch">
          Digite os termos a serem buscados
          <input
            type="text"
            id="inputSearch"
            data-testid="query-input"
            value={ inputSearch }
            onChange={ ({ value }) => this.handleChange(value) }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ () => this.handleClick() }
          >
            Pesquisar
          </button>
        </label>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ProductList
          productList={ productList }
          updateCounter={ this.updateCounter }
        />
        <SideBarCategories
          categories={ categories }
          handleChangeRadio={ this.handleChangeRadio }
        />
      </section>
    );
  }
}

export default SearchBar;
