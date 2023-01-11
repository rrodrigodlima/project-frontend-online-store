import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <section>
        <label htmlFor="inputSearch">
          Digite os termos a serem buscados
          <input type="text" id="inputSearch" />
        </label>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default SearchBar;
