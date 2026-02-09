import React, {Component} from 'react';
import ReactDom from 'react-dom'
import {Routes as Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from "./Compontent/Navbar/NavBar.jsx"
import Home from "./Compontent/Home/Home"
import ExploreOFood from "./Compontent/ExploreOFood/ExploreOFood"
import Slider from './Compontent/Slider/Slider'
import Subscribe from './Compontent/subscribe/Subscribe'
import Footer from './Compontent/Footer/Footer'
class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
            <Navbar />
            <Home />
            <ExploreOFood />
            <Slider />
            <Subscribe />
            <Route exact path='/'  component = { Home } />
            
            <Footer />
        </div>
      </Router>
        
      
    )
  }
}
export default App;
