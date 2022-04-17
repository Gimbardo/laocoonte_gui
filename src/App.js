import logo from './logo.svg';
import './App.css';
import React from 'react';
import Clock from './components/Clock'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="App">
      <Logo />
      <SearchBar />
      <Clock />
    </div>
  );
}

export default App;
