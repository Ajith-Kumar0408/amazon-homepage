import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header';

import Home from './Home';
function App() {
return (
  <div className="App">
    <Header />
    <Home />
  </div>
);
}
export default App;
