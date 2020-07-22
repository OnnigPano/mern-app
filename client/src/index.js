import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from './MuiConfig'
import './index.css';
import App from './App';
import AuthContextProvider from './context/auth-context';


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter >
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <App />
        </ThemeProvider> 
      </BrowserRouter> 
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

