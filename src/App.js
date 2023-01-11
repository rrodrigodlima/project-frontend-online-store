import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SearchBar from './pages/SearchBar';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Switch>
          <Route exact path="/" component={ SearchBar } />
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
        </Switch>
      </div>
    );
  }
}

export default App;
