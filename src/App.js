import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import SearchBar from './pages/SearchBar';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ SearchBar } />
            <Route exact path="/shoppingcart" component={ ShoppingCart } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
