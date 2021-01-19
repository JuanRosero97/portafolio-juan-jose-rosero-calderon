import React, { Component } from 'react'
import About from './components/about/index'
import Contact from './components/contact/index'
import Footer from './components/footer/index'
import Gohome from './components/goHome/index'
import Header from './components/header/index'
import Hero from './components/hero/index'
import Portfolio from './components/portfolio/index'
import Resume from './components/resume/index'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Contact />  
        <Footer />  
        <Gohome />        

      </div>
    );
  }
}
export default App;