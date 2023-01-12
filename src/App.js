import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SearchBar from './pages/SearchBar';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Switch>
          <Route exact path="/" component={ SearchBar } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/product/:id" component={ ProductDetails } />
        </Switch>
      </div>
    );
  }
}

export default App;
