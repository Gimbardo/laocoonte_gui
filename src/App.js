import './App.css';
import React from 'react';
import Logo from './components/Logo'
import SearchBar from './components/SearchBar'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const windowUrl = window.location.search;
const params = new URLSearchParams(windowUrl);

function App() {
  return (
    <Container>
      <div className="App">
        <Logo />
        <SearchBar params={params}/>
      </div>
    </Container>
    
  );
}

export default App;
