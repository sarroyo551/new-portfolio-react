import './App.css';
import Header from './components/Header'
import React, {useState} from 'react'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'


function App() {
  const [currentPage, setCurrentPage] = useState('Portfolio');
  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage}/>
      { currentPage === 'Portfolio' && <Portfolio /> }
      { currentPage === 'About' && <About /> }
      { currentPage === 'Contact' && <Contact /> }
    </div>
  );
}

export default App;
