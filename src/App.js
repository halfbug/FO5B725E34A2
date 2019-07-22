import React from 'react';
import Home from './components/Home'
import WorkedWith from './components/WorkedWith'
import Footer from './components/Footer'
import CaseStudy from './components/CaseStudy';
import Problem from './components/Problem'
import Solution from './components/Solution'
import Services from './components/Services'
import PortFolio from './components/PortFolio'

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <CaseStudy/>
      <Problem/>
<Solution/>
<Services/>
<PortFolio/>
      <Footer/>
    </div>
  );
}

export default App;
