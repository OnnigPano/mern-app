import React, { useContext, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from './containers/Auth';
import AppBar from './components/AppBar';
import Logout from './components/Logout';
import ProductsList from './containers/ProductsList';
import WelcomePage from './containers/WelcomePage';
import ProductForm from './containers/ProductForm';
import  { AuthContext }  from './context/auth-context';


function App() {

  var height = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${height}px`);

  const { isAuth, checkToken } = useContext(AuthContext);

  useEffect(() => {
    /* Genera un wanrning de dependencies, pero
    checkToken() lo ejecuto solamente en éste componente */
    checkToken();
    console.log('desde App useEffect');
  }, []);
  
  return (
      <div className="App" style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
        <AppBar />
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/products/create" component={ProductForm} />       
            <Route path="/products" component={ProductsList} />
            {!isAuth ? <Route path="/auth" component={Auth} /> : <Route path="/logout" component={Logout} />}
            <Redirect path='*' to='/' />
          </Switch>
      </div>
  );
}

export default App;
