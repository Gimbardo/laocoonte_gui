import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Search from "./pages/Search";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
  <br></br>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="search" element={<Search />} />
    </Routes>
  </BrowserRouter>
);
