import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Auth from './containers/Auth';
import AppBar from './components/AppBar';
import ProductsList from './containers/ProductsList';

function App() {
  return (
      <div className="App">
        <AppBar />
        <Container fixed>
          <Switch>
            <Route path="/products" component={ProductsList} />
            <Route path="/auth" component={Auth} />
          </Switch>
        </Container>
      </div>
  );
}

export default App;
