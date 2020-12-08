import React, { useContext, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from './containers/Auth';
import AppBar from './components/AppBar/AppBar';
import Logout from './components/Logout';
import ProductsList from './containers/ProductsList';
import WelcomePage from './containers/WelcomePage';
import Cart from './containers/Cart/Cart';
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
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            {/* <Route path="/products/create" component={ProductForm} />        */}
            <Route path="/products" component={ProductsList} />
            {!isAuth ? <Route path="/auth" component={Auth} /> : <Route path="/logout" component={Logout} />}
            <Route path="/cart" component={Cart}/>          
            <Redirect path='*' to='/' />
          </Switch>
      </div>
  );
}

export default App;
