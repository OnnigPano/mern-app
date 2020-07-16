import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from './MuiConfig'
import Auth from './components/Auth';
import AppBar from './components/AppBar';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <CssBaseline />
        <AppBar />
        <Auth />
      </div>
    </ThemeProvider>
  );
}

export default App;
