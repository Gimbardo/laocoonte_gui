import './App.css';
import React from 'react';
import Clock from './components/Clock'
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Logo />
      <SearchBar />
      <Clock />
      <Link to="/search">Search</Link> 
    </div>
  );
}

export default App;
