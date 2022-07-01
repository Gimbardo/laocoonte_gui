import './App.css';
import React from 'react';
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <SearchBar />
    </div>
  );
}

export default App;
