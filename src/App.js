import './App.css';
import React , { Component } from 'react'

import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import Team from './component/Team';
import Testimonials from './component/Testimonials';
import Joinus from './component/Joinus';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (

    <div>
      {/* <Navbar />
      <br /><br />
      <Home/>
      <hr className='my-12' />

      
      <Team/>
      <Testimonials/>
      <Joinus/>
      <Footer className="end-0"/> */}

      {/* Using routes */}

      <Router>
    <Navbar/>

    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/Team" element={<Team/>} />
    <Route exact path="/Testimonials" element={<Testimonials/>} />
    <Route exact path="/Joinus" element={<Joinus/>} />


    {/* <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={6} country="in" category="Technology"/>} /> */}
    </Routes>
      </Router>

      <Footer className="end-0" />

      </div>

    
  );
}

export default App;
