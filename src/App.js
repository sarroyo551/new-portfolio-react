import './App.css';
import Header from './components/Header'
import React from 'react'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
