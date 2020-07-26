import React, { useContext, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "@material-ui/core";
import Auth from './containers/Auth';
import AppBar from './components/AppBar';
import ProductsList from './containers/ProductsList';
import WelcomePage from './containers/WelcomePage';
import  { AuthContext }  from './context/auth-context';


function App() {

  const { isAuth, checkToken } = useContext(AuthContext);

  useEffect(() => {
    /* Genera un wanrning de dependencies, pero
    checkToken() lo ejecuto solamente en éste componente */
    checkToken();
    console.log('desde App useEffect');
  }, []);
  
  return (
      <div className="App">
        <AppBar />
        <Route exact path="/" component={WelcomePage} />
        <Container fixed>
          <Switch>
            <Route path="/products" component={ProductsList} />
            {!isAuth ? <Route path="/auth" component={Auth} /> : null}
            <Redirect path='*' to='/' />
          </Switch>
        </Container>
      </div>
  );
}

export default App;
