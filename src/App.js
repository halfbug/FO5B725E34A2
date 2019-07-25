import React from 'react';
import Home from './components/Home'
import WorkedWith from './components/WorkedWith'
import Footer from './components/Footer'
import CaseStudy from './components/CaseStudy';
import Problem from './components/Problem'
import Solution from './components/Solution'
import Services from './components/Services'
import PortFolio from './components/PortFolio'
import Results from './components/Results'
import Process from './components/Process'
import Gurantee from './components/Gurantee'
// import './App.css';
import {createMuiTheme} from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AskOrder from './components/AskOrder';
import Testimonial from './components/Testimonial';
import Faq from './components/Faq'
import Helping from './components/Helping'
// import { BrowserRouter } from "react-router-dom";


const theme = createMuiTheme({
  palette: {
      // type: "dark",
      primary: {
          main: '#DC353D',
      },
      secondary: {
          main: '#2D2D2D',
      },
  },
});



function App() {
  return (
    <div className="App">
    <MuiThemeProvider theme={theme}>
      <Home >
      <WorkedWith/>
      <CaseStudy/>
      <Problem/>
<Solution/>
<Services/>
<PortFolio/>
<Results/>
<Process/>
<Gurantee/>
<AskOrder/>
<Testimonial />
<Faq />
<Helping />
      <Footer/>
      </Home>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
