import React from 'react';
import './App.css';
import { Navbar, Home, About, Tools, Portfolio, Footer } from './Components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Tools />
      <Footer />
    </div>
  );
}

export default App;
