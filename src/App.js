import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Home/Hero';
import BestSaler from './Home/BestSaler';
import CircleSection from './Home/CircleSection';
import BestCa from './Home/BestCa';
import Ofu from './Home/Ofu';
import AdsBar from './Home/AdsBar';
import Sale from './Home/Sale';
import SaleCa from './Home/SaleCa';
import Footer from './Component/Footer';
import BarAds from './Home/BarAds';
import Men from './Home/Men';
import MenCa from './Home/MenCa';
import Opcastm from './Home/opcastm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Component/Home';







function App() {

  return (
    <div className="App">
      <AdsBar/>
<Home/>
      <Footer/>
    </div>
  );
}

export default App;
