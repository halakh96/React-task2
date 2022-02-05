import React from 'react';
import { Routes , Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from './Contact';
import Nav from './Nav';
import Products from './Products';
import Team from './Team';
import './App.css';


const App = () => {
return (
  <div>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Products" element={<Products />}/>
      <Route path="/Team" element={<Team />}/>
    </Routes>
  </div>
);

}

export default App;
