import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ SearchBar } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
