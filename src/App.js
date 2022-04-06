import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Details from './components/Details';
import Footer from './components/Footer';
import Home from './components/Home';
import Movies from './components/Movies';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="bg-light">
      <Router>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
