import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppFooter from './components/AppFooter';
import AppBody from './components/AppBody';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
}

export default App;
