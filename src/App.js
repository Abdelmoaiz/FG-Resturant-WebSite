import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Compontent/Navbar/NavBar.jsx";
import Home from "./Compontent/Home/Home";
import ExploreOFood from "./Compontent/ExploreOFood/ExploreOFood";
import Slider from './Compontent/Slider/Slider';
import Subscribe from './Compontent/subscribe/Subscribe';
import Footer from './Compontent/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />

          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <ExploreOFood />
                <Slider />
                <Subscribe />
              </>
            } />
            <Route path="/explore" element={<ExploreOFood />} />
            {/* لو عندك صفحات Reviews أو FAQ اضيفها هنا */}
          </Routes>

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
