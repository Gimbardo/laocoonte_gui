import logo from './logo.svg';
import './App.css';
import React from 'react';
import Clock from './components/Clock'
import SearchButton from './components/SearchButton'

const element = <h1>Hello, world</h1>;

function Logo(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element2 = <Logo name="Logo" />

function App() {
  return (
    <div className="App">
      <Logo name="cagasburra"/>
      <Clock />
      <SearchButton />
    </div>
  );
}

export default App;
